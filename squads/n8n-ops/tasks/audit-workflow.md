---
task: audit-workflow
responsavel: "@n8n-auditor"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - workflow_id: ID do workflow n8n (required)
Saida: |
  - Relatório de auditoria com health score, findings e recomendações
Checklist:
  - "[ ] Buscar workflow via API"
  - "[ ] Verificar estrutura básica (trigger, connections)"
  - "[ ] Verificar error handling"
  - "[ ] Avaliar performance (loops, timeouts, batch sizes)"
  - "[ ] Calcular complexidade (nodes, branches)"
  - "[ ] Verificar manutenibilidade (nomes, docs, tags)"
  - "[ ] Calcular health score"
  - "[ ] Gerar relatório com findings e severidades"
---

# Audit Workflow

**Task for:** @n8n-auditor (n8n-ops squad)

## Overview

Audita a saúde de um workflow n8n verificando estrutura, error handling, performance e manutenibilidade. Gera um health score de 0-100 com findings categorizados.

## Usage

```
@n8n-ops/n8n-auditor
*audit J2pjLqBiMEU6Nq54
```

## Checks

### Estrutura (30 pontos)
- Tem trigger? (-30 se não)
- Nodes desconectados? (-15 cada)
- Connections válidas? (-10 se apontam para node inexistente)

### Error Handling (20 pontos)
- Error workflow configurado? (-20 se não)
- HTTP requests com catch? (-10 cada sem tratamento)

### Performance (20 pontos)
- Loops com condição de saída? (-20 se infinito)
- Wait com timeout razoável? (-5 cada > 1h)
- Batch size adequado? (-5 se muito grande)

### Manutenibilidade (30 pontos)
- Nomes descritivos? (-2 por nome genérico)
- Sticky notes? (-10 se nenhuma)
- Tags de owner? (-10 se ausente)
- Complexidade < 20 nodes? (-5 se > 20, -15 se > 30)

## Related

- **Agent:** @n8n-auditor
- **Complementar:** check-compliance (para regras de naming específicas)
