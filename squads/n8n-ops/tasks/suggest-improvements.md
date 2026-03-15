---
task: suggest-improvements
responsavel: "@n8n-ideator"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - workflow_id: ID do workflow n8n (required)
  - ou "all" para análise cross-workflow
Saida: |
  - Lista de sugestões categorizadas por impacto x esforço
Checklist:
  - "[ ] Buscar workflow(s) via API"
  - "[ ] Analisar nodes para otimizações"
  - "[ ] Detectar padrões repetidos"
  - "[ ] Identificar candidatos a sub-workflow"
  - "[ ] Avaliar impacto x esforço de cada sugestão"
  - "[ ] Gerar relatório com sugestões priorizadas"
---

# Suggest Improvements

**Task for:** @n8n-ideator (n8n-ops squad)

## Overview

Analisa um workflow (ou todos) e sugere melhorias de performance, consolidação e novas automações.

## Usage

```
@n8n-ops/n8n-ideator
*improve J2pjLqBiMEU6Nq54

*patterns    # detecta padrões entre workflows
*consolidate # sugere consolidações
```

## Tipos de Sugestão

1. **Quick Wins**: Esforço baixo, impacto alto (fazer agora)
2. **Melhorias**: Esforço médio, impacto médio-alto (planejar)
3. **Consolidações**: Múltiplos workflows → 1 sub-workflow
4. **Novos Workflows**: Gaps identificados

## Related

- **Agent:** @n8n-ideator
- **Complementar:** audit-workflow (identifica problemas que precisam de melhoria)
