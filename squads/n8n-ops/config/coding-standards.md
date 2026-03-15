# n8n-ops Squad - Coding Standards

## Padronização de Nomenclatura

### Estrutura Padrão
`[TIPO][SISTEMA_ORIGEM][SISTEMA_DESTINO] - Ação Específica`

### Prefixos por Tipo de Gatilho

| Prefixo | Significado | Exemplo |
|---------|-------------|---------|
| `[WH]` | Webhook (recebe dados em tempo real) | `[WH][HOTMART][SUPABASE] - Processar Vendas` |
| `[SCH]` | Schedule (execução agendada) | `[SCH][ANALYTICS][NOTION] - Relatório Diário` |
| `[MANUAL]` | Execução manual | `[MANUAL][CLICKUP][EMAIL] - Enviar Notificação` |
| `[WB]` | Webhook simples | `[WB][PAGTRUST][DL] - Guardar Transações` |
| `[PG]` | Page/Form trigger | `[PG][TALLY][AC] - Captação de Leads` |
| `[BASE]` | Template base para cópia | `[BASE][WKL] - Template Liberação` |
| `[ERRO]` | Error Handler | `[ERRO][SISTEMA][SLACK] - Notificação de Falhas` |
| `[ACTIVE]` | Active Campaign trigger | `[ACTIVE][COMUNICACAO][WHATSAPP] - Onboarding D0` |
| `[WKL]` | Sub-workflow (chamado por outro) | `[WKL][WB] - Revogar Acesso SA` |

### Sistemas Comuns (abreviações)

| Abreviação | Sistema |
|------------|---------|
| `SA` | Super Agentes |
| `SUPA` | Supabase |
| `HOTMART` | Hotmart |
| `PAGTRUST` | Pagtrust |
| `TMB` | TMB (gateway pagamento) |
| `CLICKUP` | ClickUp |
| `HUBSPOT` | HubSpot |
| `EVOLUTION` | Evolution API |
| `CHATWOOT` | Chatwoot |
| `AI` | Inteligência Artificial |
| `DL` | Data Lake (BigQuery) |
| `DB` | Database |
| `AC` | Active Campaign |
| `SLACK` | Slack |
| `NOTION` | Notion |
| `CIRCLE` | Circle (comunidade) |
| `CURSEDUCA` | Curseduca (LMS) |
| `WHATSAPP` | WhatsApp API |
| `GMAIL` | Gmail |
| `N8N` | n8n (self-reference) |
| `POSTGRES` | PostgreSQL |
| `BQ` | BigQuery |

### Exemplos de Nomenclatura Correta
- `[WH][HOTMART][SUPABASE] - Processar Vendas`
- `[SCH][ANALYTICS][NOTION] - Relatório Diário`
- `[MANUAL][CLICKUP][EMAIL] - Enviar Notificação`
- `[WB][PAGTRUST][DL] - Guardar Transações Raw`
- `[ERRO][SISTEMA][SLACK] - Notificação de Falhas em Workflows`
- `[WKL][WB][CIRCLE] - Adicionar Acesso a Comunidade`
- `[ACTIVE][COMUNICACAO][WHATSAPP] - Envia comunicado D5 do onboarding`

### Exemplos de Nomenclatura INCORRETA
- `My workflow 3` - sem prefixo, sem descrição
- `teste wb arsenal1` - sem padrão de brackets
- `Fluxo buxa` - nome sem sentido
- `arsneal hub` - typo, sem prefixo

### Nome dos Nodes
- Usar nomes descritivos em snake_case ou camelCase
- NUNCA deixar nomes default: "Set", "IF", "HTTP Request"
- Exemplos bons: `puxa_fluxo`, `extrai_tags`, `roteia`, `notifica_slack`
- Exemplos ruins: "Set1", "IF2", "My workflow 3"

### Tags Obrigatórias
Cada workflow DEVE ter no mínimo:
1. **Owner**: Sid, Klaus, Rogerio, Bruno, Adavio, Fofonka
2. **Criticidade**: Critico, Importante, Experimental (quando aplicável)
3. **Tipo**: Webhook, Schedule, Manual, WKL, etc.

## Padrão de Sticky Notes

```markdown
## nome_do_node
Tipo: OPERAÇÃO
- Descrição funcional do que o node faz
```

### Cores por Categoria
| Categoria | Color ID | Cor Visual |
|-----------|----------|------------|
| Trigger | 2 | Verde |
| Action | 4 | Azul |
| Logic | 6 | Amarelo |
| Transform | 3 | Roxo |
| Utility | 1 | Cinza |

## Output de Agents
- Relatórios em Markdown
- Sticky notes em JSON clipboard-ready
- Sempre incluir timestamp e workflow ID
