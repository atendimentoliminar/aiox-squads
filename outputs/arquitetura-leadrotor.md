# Arquitetura — LeadRotor

> Plataforma de gestão de leads e distribuição inteligente para operações de consórcio
> Arquiteta: Aria | Data: 2026-03-22
> Stack: Next.js (Vercel) + Supabase + n8n + Evolution API + Meta Lead Ads

---

## Visão Geral do Sistema

```
┌─────────────┐     ┌──────────┐     ┌─────────────────┐
│ Meta Lead Ads│────▶│  n8n     │────▶│  Supabase       │
│ (captação)   │     │  (IA)    │     │  (backend)      │
└─────────────┘     └────┬─────┘     └───────┬─────────┘
                         │                    │
                         │ Evolution API      │ Realtime
                         ▼                    ▼
                   ┌───────────┐      ┌──────────────┐
                   │ WhatsApp  │      │ Next.js      │
                   │ (lead +   │      │ Dashboard    │
                   │ vendedor) │      │ (Vercel)     │
                   └───────────┘      └──────────────┘
```

---

## Fluxo Completo

```
1. Lead entra via Meta Lead Ads
       ↓
2. Webhook dispara n8n
       ↓
3. IA conversa via WhatsApp (Evolution API)
   ├── Identifica tipo: imóvel / auto / agro / serviço
   ├── Identifica valor de investimento
   └── Classifica: quente / morno / frio
       ↓
4. Lead quente → Supabase (insert via n8n)
       ↓
5. Edge Function "roulette-engine" dispara
   ├── Consulta regras do tenant
   ├── Aplica filtros (tipo, peso, cap, horário)
   ├── Seleciona vendedor
   └── Cria assignment com status PENDING
       ↓
6. Notifica vendedor via WhatsApp (Evolution API)
   └── Resumo: nome, tipo de consórcio, valor, contexto da conversa
       ↓
7. Vendedor confirma? (botão WhatsApp ou link)
   ├── SIM → status ACCEPTED, lead é dele
   └── NÃO / TIMEOUT → volta pra roleta, próximo vendedor
       ↓
8. Dashboard atualiza em tempo real (Supabase Realtime)
```

---

## Stack Técnico

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| Frontend | Next.js 14+ (App Router) | SSR, multi-tenant via slug, Vercel nativo |
| Auth | Supabase Auth | Magic link ou email/senha, integração RLS nativa |
| Backend | Supabase (Postgres + Edge Functions) | RLS multi-tenant, Realtime, zero infra |
| Roleta | Supabase Edge Function | Lógica isolada, chamável pelo n8n via HTTP |
| IA | n8n (existente) | Já funciona, não mexer |
| WhatsApp | Evolution API (existente) | Envio pro lead e pro vendedor |
| Ads | Meta Lead Ads | Formulário nativo, webhook pro n8n |
| Deploy | Vercel | Zero config, preview deploys, edge |

---

## Modelo de Dados (Supabase)

### tenants

```sql
CREATE TABLE tenants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL, -- URL: app.leadrotor.com.br/{slug}
  owner_id uuid REFERENCES auth.users(id),
  settings jsonb DEFAULT '{}',
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);
```

### sellers

```sql
CREATE TABLE sellers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id uuid REFERENCES tenants(id) NOT NULL,
  name text NOT NULL,
  phone text NOT NULL, -- WhatsApp do vendedor
  email text,
  active boolean DEFAULT true,
  status text CHECK (status IN ('available', 'paused', 'offline')) DEFAULT 'available',
  specialties text[] DEFAULT '{}', -- ['imovel', 'auto', 'agro', 'servico']
  weight integer DEFAULT 1, -- peso na roleta
  daily_cap integer, -- máx leads/dia (null = sem limite)
  weekly_cap integer, -- máx leads/semana (null = sem limite)
  work_hours jsonb DEFAULT '{"start": "08:00", "end": "18:00", "days": [1,2,3,4,5]}',
  leads_today integer DEFAULT 0, -- reset diário via pg_cron
  leads_this_week integer DEFAULT 0, -- reset semanal via pg_cron
  total_leads integer DEFAULT 0,
  total_conversions integer DEFAULT 0,
  last_lead_at timestamptz,
  created_at timestamptz DEFAULT now()
);
```

### leads

```sql
CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id uuid REFERENCES tenants(id) NOT NULL,
  name text NOT NULL,
  phone text NOT NULL,
  source text CHECK (source IN ('meta_ads', 'manual', 'referral')) DEFAULT 'meta_ads',
  type text CHECK (type IN ('imovel', 'auto', 'agro', 'servico', 'outro')),
  investment_amount decimal,
  score text CHECK (score IN ('hot', 'warm', 'cold')),
  ai_summary text, -- resumo da conversa com IA
  raw_data jsonb DEFAULT '{}', -- dados brutos do Meta/n8n
  status text CHECK (status IN ('new', 'queued', 'assigned', 'accepted', 'in_progress', 'converted', 'lost')) DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  converted_at timestamptz
);
```

### lead_assignments

```sql
CREATE TABLE lead_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id uuid REFERENCES tenants(id) NOT NULL,
  lead_id uuid REFERENCES leads(id) NOT NULL,
  seller_id uuid REFERENCES sellers(id) NOT NULL,
  status text CHECK (status IN ('pending', 'accepted', 'rejected', 'timeout', 'reassigned')) DEFAULT 'pending',
  assigned_at timestamptz DEFAULT now(),
  responded_at timestamptz,
  timeout_minutes integer DEFAULT 5,
  attempt_number integer DEFAULT 1,
  rejection_reason text
);
```

### roulette_config

```sql
CREATE TABLE roulette_config (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id uuid REFERENCES tenants(id) UNIQUE NOT NULL,
  mode text CHECK (mode IN ('round_robin', 'weighted', 'performance')) DEFAULT 'round_robin',
  timeout_minutes integer DEFAULT 5,
  max_attempts integer DEFAULT 3, -- máx vendedores antes de fila manual
  distribute_by_specialty boolean DEFAULT true,
  respect_work_hours boolean DEFAULT true,
  respect_daily_cap boolean DEFAULT true,
  respect_weekly_cap boolean DEFAULT false,
  performance_weight boolean DEFAULT false, -- quem converte mais, recebe mais
  notify_admin_on_timeout boolean DEFAULT true,
  min_score text CHECK (min_score IN ('hot', 'warm', 'cold')) DEFAULT 'hot',
  high_ticket_threshold decimal, -- leads acima desse valor → só vendedores seniores
  high_ticket_sellers uuid[], -- vendedores autorizados pra alto ticket
  updated_at timestamptz DEFAULT now()
);
```

### lead_events

```sql
CREATE TABLE lead_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id uuid REFERENCES tenants(id) NOT NULL,
  lead_id uuid REFERENCES leads(id) NOT NULL,
  event_type text NOT NULL, -- 'created', 'qualified', 'assigned', 'accepted', 'timeout', 'converted', 'lost'
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);
```

### RLS Policies

```sql
-- Aplicar em TODAS as tabelas (exceto tenants que tem regra própria)
ALTER TABLE sellers ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE roulette_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_events ENABLE ROW LEVEL SECURITY;

-- Exemplo de policy (replicar pra cada tabela)
CREATE POLICY "tenant_isolation" ON sellers
  USING (tenant_id = (auth.jwt() ->> 'tenant_id')::uuid);

-- Vendedor só vê seus próprios leads
CREATE POLICY "seller_own_leads" ON lead_assignments
  FOR SELECT
  USING (
    seller_id = auth.uid()
    OR
    tenant_id = (auth.jwt() ->> 'tenant_id')::uuid
    AND EXISTS (
      SELECT 1 FROM tenants WHERE id = tenant_id AND owner_id = auth.uid()
    )
  );
```

### Resets Automáticos (pg_cron)

```sql
-- Reset leads_today à meia-noite
SELECT cron.schedule('reset-daily-leads', '0 0 * * *',
  $$UPDATE sellers SET leads_today = 0$$
);

-- Reset leads_this_week toda segunda
SELECT cron.schedule('reset-weekly-leads', '0 0 * * 1',
  $$UPDATE sellers SET leads_this_week = 0$$
);
```

---

## Algoritmo da Roleta

```
FUNÇÃO: assign_lead(lead)

1. Buscar roulette_config do tenant
2. Filtrar vendedores elegíveis:
   ├── active = true AND status = 'available'
   ├── IF distribute_by_specialty → specialty inclui lead.type
   ├── IF respect_work_hours → dentro do horário configurado
   ├── IF respect_daily_cap → leads_today < daily_cap
   ├── IF respect_weekly_cap → leads_this_week < weekly_cap
   ├── IF high_ticket_threshold → lead.investment_amount >= threshold → só high_ticket_sellers
   └── IF min_score → lead.score >= min_score configurado

3. Se NENHUM vendedor elegível:
   ├── lead.status = 'queued'
   └── Notificar admin via WhatsApp, lead fica visível no dashboard

4. Ordenar vendedores conforme modo:
   ├── round_robin → ORDER BY last_lead_at ASC NULLS FIRST (quem recebeu há mais tempo)
   ├── weighted → probabilidade proporcional ao campo weight
   └── performance → ORDER BY (total_conversions / GREATEST(total_leads, 1)) DESC

5. Selecionar vendedor #1
6. Criar lead_assignment (status: PENDING, attempt_number: N)
7. Atualizar lead.status = 'assigned'
8. Enviar WhatsApp pro vendedor via Evolution API:
   ├── Nome do lead
   ├── Tipo de consórcio
   ├── Valor de investimento
   ├── Resumo da conversa com IA
   └── Botão/link pra aceitar ou rejeitar

9. Agendar timeout check (n8n delay node ou pg_cron):
   └── Após timeout_minutes verificar se status ainda é PENDING

10. Se TIMEOUT ou REJECTED:
    ├── Marcar assignment como TIMEOUT/REJECTED
    ├── attempt_number + 1
    ├── IF attempt < max_attempts → volta pro passo 2 (exclui vendedores já tentados)
    └── IF attempt >= max_attempts → lead.status = 'queued' + notifica admin

11. Se ACCEPTED:
    ├── Marcar assignment como ACCEPTED
    ├── lead.status = 'accepted'
    ├── Atualizar seller: leads_today++, leads_this_week++, total_leads++, last_lead_at = now()
    └── Registrar lead_event
```

---

## Edge Function — roulette-engine

```typescript
// supabase/functions/roulette-engine/index.ts
// Chamada pelo n8n via POST após qualificação do lead
// Body: { tenant_id, lead_id }
// Retorna: { success, assignment_id, seller_id, seller_phone }

// Responsabilidades:
// 1. Buscar config da roleta
// 2. Filtrar vendedores elegíveis
// 3. Selecionar vendedor conforme modo
// 4. Criar assignment
// 5. Retornar dados pro n8n enviar WhatsApp
```

### Edge Function — accept-lead

```typescript
// supabase/functions/accept-lead/index.ts
// Chamada via link no WhatsApp do vendedor ou via dashboard
// Body: { assignment_id, action: 'accept' | 'reject', rejection_reason? }
// Retorna: { success, lead_data }

// Responsabilidades:
// 1. Validar assignment pertence ao vendedor
// 2. Atualizar status
// 3. Se reject → disparar re-assignment via roulette-engine
// 4. Registrar evento
```

### Edge Function — check-timeout

```typescript
// supabase/functions/check-timeout/index.ts
// Chamada pelo n8n após delay de X minutos ou via pg_cron
// Body: { assignment_id }

// Responsabilidades:
// 1. Verificar se assignment ainda é PENDING
// 2. Se sim → marcar TIMEOUT + chamar roulette-engine com attempt+1
// 3. Se não → ignorar (já foi aceito/rejeitado)
```

---

## Dashboard — Telas

### Admin

| Tela | Componentes | Dados |
|------|------------|-------|
| **Overview** | Cards KPI + gráfico de leads/dia + feed de atividade recente | Leads hoje, taxa aceitação, conversões, leads na fila, tempo médio de aceite |
| **Leads** | Tabela com filtros + busca + status badges | Todos os leads com filtro por status, tipo, vendedor, data, score |
| **Lead Detail** | Timeline vertical + dados do lead + assignment history | Captação → IA → roleta → vendedor → status final |
| **Vendedores** | Tabela + modal de cadastro/edição | Nome, phone, status, especialidades, peso, caps, horários, métricas |
| **Configuração Roleta** | Formulário com toggles e selects | Modo, timeout, tentativas, filtros ativos, threshold alto ticket |
| **Relatórios** | Gráficos + tabelas comparativas | Conversão por vendedor, por tipo, ROI do ad spend, tempo médio de aceite, leads perdidos |

### Vendedor

| Tela | Componentes | Dados |
|------|------------|-------|
| **Meus Leads** | Lista de leads atribuídos + ações | Leads pendentes, aceitos, em andamento |
| **Lead Action** | Aceitar / Rejeitar / Marcar conversão | Resumo da IA + dados do lead + botões de ação |
| **Meu Desempenho** | Cards KPI simples | Leads recebidos, aceitos, convertidos, taxa de conversão |

---

## Configurações da Roleta — Matriz Completa

| Config | Tipo | Default | Descrição |
|--------|------|---------|-----------|
| mode | enum | round_robin | Modo da roleta: round_robin, weighted, performance |
| timeout_minutes | integer | 5 | Tempo para vendedor aceitar antes de passar pro próximo |
| max_attempts | integer | 3 | Máx vendedores tentados antes de fila manual |
| distribute_by_specialty | boolean | true | Vendedor só recebe leads do tipo que domina |
| respect_work_hours | boolean | true | Lead fora do horário fica na fila |
| respect_daily_cap | boolean | true | Respeitar limite diário por vendedor |
| respect_weekly_cap | boolean | false | Respeitar limite semanal por vendedor |
| performance_weight | boolean | false | Quem converte mais recebe mais leads |
| notify_admin_on_timeout | boolean | true | Admin recebe alerta quando lead esgota tentativas |
| min_score | enum | hot | Score mínimo pra entrar na roleta (hot/warm/cold) |
| high_ticket_threshold | decimal | null | Valor acima do qual só vendedores seniores recebem |
| high_ticket_sellers | uuid[] | [] | Vendedores autorizados pra negociações de alto ticket |

### Configurações por Vendedor

| Config | Tipo | Default | Descrição |
|--------|------|---------|-----------|
| active | boolean | true | Ativar/desativar na roleta |
| status | enum | available | available / paused / offline |
| specialties | text[] | [] | Tipos de consórcio que domina |
| weight | integer | 1 | Peso na distribuição (weighted mode) |
| daily_cap | integer | null | Máx leads por dia |
| weekly_cap | integer | null | Máx leads por semana |
| work_hours | jsonb | 08-18 seg-sex | Horário de atendimento |

---

## Multi-Tenant

```
Estrutura de URL: app.leadrotor.com.br/{tenant-slug}

Tenant A (Fabiano):       app.leadrotor.com.br/fabiano
Tenant B (Franqueado X):  app.leadrotor.com.br/franqueado-x

Isolamento:
- RLS com tenant_id em TODA tabela
- tenant_id injetado no JWT via custom claim no Supabase Auth
- Middleware Next.js extrai slug da URL → resolve tenant_id → injeta no contexto
- Super Admin (Fabiano) acessa todos os tenants via painel separado

Onboarding de novo tenant:
1. Super Admin cria tenant no painel
2. Define owner (email)
3. Owner recebe magic link
4. Owner configura: vendedores, roleta, integração Evolution API
```

---

## Segurança

| Camada | Implementação |
|--------|---------------|
| Auth | Supabase Auth (magic link recomendado pra vendedores) |
| RLS | Todas as tabelas com policy por tenant_id |
| API | Edge Functions com verificação de JWT |
| Webhook n8n → Supabase | API key secreta no header (validar na Edge Function) |
| Evolution API | Token por tenant armazenado em tenant.settings (criptografado) |
| Rate limiting | Vercel Edge Middleware — proteção contra abuso |
| Dados sensíveis | Telefones e dados pessoais — acesso apenas pelo tenant owner |

---

## Integrações

### n8n → Supabase (lead qualificado)

```
POST /functions/v1/roulette-engine
Headers: { Authorization: Bearer {SUPABASE_ANON_KEY}, x-webhook-secret: {SECRET} }
Body: {
  tenant_id: "uuid",
  name: "João Silva",
  phone: "+5541999999999",
  type: "imovel",
  investment_amount: 350000,
  score: "hot",
  ai_summary: "Cliente interessado em consórcio imobiliário...",
  source: "meta_ads",
  raw_data: { ... }
}
```

### Supabase → Evolution API (notificar vendedor)

```
POST {EVOLUTION_API_URL}/message/sendText/{instance}
Headers: { apikey: {EVOLUTION_KEY} }
Body: {
  number: "+5541988888888",
  text: "🔔 *Novo lead!*\n\n*Nome:* João Silva\n*Tipo:* Imóvel\n*Valor:* R$350.000\n*Resumo:* Cliente interessado em consórcio imobiliário...\n\nAceitar: {LINK}\nRejeitar: {LINK}"
}
```

### Vendedor aceita/rejeita (via link)

```
GET app.leadrotor.com.br/api/lead-action?assignment={ID}&action=accept&token={JWT}
→ Edge Function accept-lead processa
→ Redireciona pra dashboard com lead aberto
```

---

## Estimativa de Esforço

| Fase | Escopo | Tempo |
|------|--------|-------|
| 1 - Backend | Schema Supabase + RLS + 3 Edge Functions | 3-4 dias |
| 2 - Integração | n8n → Supabase → Evolution API (notificação + timeout) | 2-3 dias |
| 3 - Dashboard Admin | Next.js: overview, leads, vendedores, config roleta | 5-7 dias |
| 4 - Dashboard Vendedor | Tela "Meus Leads" + aceitar/rejeitar + métricas | 2-3 dias |
| 5 - Multi-tenant | Tenant management + super admin + onboarding | 2-3 dias |
| **Total MVP** | | **14-20 dias** |

---

## Visão Futura — SaaS para Rede Canopus

Este sistema é projetado desde o dia zero como multi-tenant. Quando estiver validado na operação do Fabiano:

1. **Onboarding self-service** — franqueado Canopus se cadastra
2. **Precificação** — definir com Marcos (por franqueado? por lead? por vendedor?)
3. **White-label** — cada franqueado com identidade visual própria (opcional)
4. **Marketplace de vendedores** — franqueados compartilham vendedores entre si (fase futura)
5. **Analytics cross-tenant** — Marcos (Canopus) vê métricas da rede inteira

---

*Documento de arquitetura — LeadRotor v1.0*
*Aria (Architect) — Março 2026*
