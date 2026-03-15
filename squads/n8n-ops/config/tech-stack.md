# n8n-ops Squad - Tech Stack

## n8n Instance

| Item | Valor |
|------|-------|
| Platform | n8n Cloud |
| API Version | v1 |
| Auth | API Key (JWT) via X-N8N-API-KEY header |
| Transport | HTTPS REST |

## API Endpoints

| Method | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /api/v1/workflows | Listar workflows |
| GET | /api/v1/workflows/{id} | Detalhe de workflow |
| PUT | /api/v1/workflows/{id} | Atualizar workflow |
| GET | /api/v1/executions | Listar execuções |
| GET | /api/v1/executions/{id} | Detalhe de execução |
| GET | /api/v1/credentials | Listar credenciais |

## Integrations

| Serviço | Uso |
|---------|-----|
| Notion | Database "Mapa do Workspace" para inventário |
| Slack | Notificações de erro |
| BigQuery | Logs de erro |
| Supabase | Dados de alunos |
| Active Campaign | CRM |
| Hotmart / PagTrust / TMB | Pagamentos |

## Métricas da Instância

| Métrica | Valor |
|---------|-------|
| Total Workflows | 180 |
| Ativos | 127 |
| Inativos | 53 |
| Tipos de Nodes Únicos | 69 |
| Total de Instâncias de Nodes | 3.057 |

## Node Types Reference

Arquivo completo em `data/n8n-node-types-reference.json` com:
- 69 tipos de nodes categorizados
- Operações por tipo
- Contagem de uso
- Categorias: trigger, action, logic, transform, utility
