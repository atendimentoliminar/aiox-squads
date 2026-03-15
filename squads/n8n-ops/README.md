# n8n-ops Squad

Squad para operações, documentação, auditoria e governança de workflows n8n.

## Arquitetura

```
n8n-chief (Orchestrator)
├── n8n-documenter  📝  Gera sticky notes JSON para workflows
├── n8n-auditor     🔍  Audita saúde dos workflows
├── n8n-security    🛡️  Análise de segurança
├── n8n-ideator     💡  Sugestões de melhorias
└── n8n-compliance  📏  Conformidade de nomenclatura e tags
```

## Quick Start

```bash
# Ativar squad
@n8n-chief

# Documentar um workflow (gera JSON de sticky notes)
@n8n-documenter *document <workflow-id>

# Auditar saúde
@n8n-auditor *audit <workflow-id>

# Scan de segurança
@n8n-security *scan <workflow-id>

# Sugestões de melhoria
@n8n-ideator *improve <workflow-id>

# Verificar conformidade
@n8n-compliance *check <workflow-id>

# Relatório de inventário
@n8n-compliance *inventory
```

## Agents

| Agent | Persona | Função |
|-------|---------|--------|
| n8n-chief | ⚙️ Chief | Orquestrador, roteia comandos |
| n8n-documenter | 📝 Nota | Gera sticky notes JSON clipboard-ready |
| n8n-auditor | 🔍 Lupa | Health score e findings |
| n8n-security | 🛡️ Escudo | Credenciais, webhooks, injection |
| n8n-ideator | 💡 Faísca | Otimizações e consolidações |
| n8n-compliance | 📏 Régua | Nomenclatura, tags, padrões |

## Tasks

| Task | Agent | Descrição |
|------|-------|-----------|
| document-workflow | documenter | Sticky notes para 1 workflow |
| batch-document | documenter | Sticky notes em lote |
| audit-workflow | auditor | Auditoria de saúde |
| security-scan | security | Scan de segurança |
| suggest-improvements | ideator | Sugestões de melhoria |
| check-compliance | compliance | Verificação de conformidade |
| inventory-report | compliance | Inventário completo |

## Requisitos

- Variável `N8N_API_URL` com URL da instância n8n
- Variável `N8N_API_KEY` com API key de autenticação

## Instância

| Métrica | Valor |
|---------|-------|
| Workflows | 180 |
| Ativos | 127 |
| Tipos de Nodes | 69 |
| Total Nodes | 3.057 |

---

*n8n-ops Squad v1.0.0 - Sidney Fernandes*
