# Analyze n8n Flow

**Task ID:** `analyze-n8n-flow`
**Pattern:** HO-TP-001
**Version:** 1.0.0

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Analyze n8n Flow |
| **status** | `pending` |
| **responsible_executor** | flow-analyzer |
| **execution_type** | `Agent` (Worker for parse, Agent for pattern classification) |
| **input** | n8n workflow JSON |
| **output** | Relatório de análise (nós, patterns, complexity, anti-patterns) |
| **action_items** | 6 steps |
| **acceptance_criteria** | 4 criteria |

## Overview

Análise diagnóstica de um fluxo n8n SEM converter. Útil para entender o que o fluxo faz, identificar patterns e problemas antes de decidir converter.

## Action Items

### Step 1: Extract Nodes
- Ler array `nodes` do JSON
- Para cada nó: extrair `type`, `name`, `parameters`, `position`
- Listar todos com índice

### Step 2: Extract Connections
- Ler objeto `connections`
- Mapear source → target (com output index)
- Construir grafo direcionado

### Step 3: Identify Triggers
- Encontrar nó(s) sem conexão de entrada
- Classificar tipo de trigger

### Step 4: Classify Patterns
- Para cada nó, lookup em `data/n8n-node-mapping.yaml`
- Atribuir EIP pattern e WCP pattern (se aplicável)
- Listar nós sem mapeamento como [UNKNOWN]

### Step 5: Calculate Complexity
Score baseado em:
- **Base:** 1 ponto por nó
- **Branches (IF/Switch):** +2 por branch
- **Loops:** +3 por loop
- **Merges:** +2 por merge
- **Sub-workflows:** +5 por sub-workflow
- **AI nodes:** +3 por AI node

| Score | Classification |
|-------|---------------|
| 1-5 | LOW |
| 6-15 | MEDIUM |
| 16-30 | HIGH |
| 31+ | VERY HIGH (recomenda decomposição) |

### Step 6: Detect Anti-patterns
Verificar:
- [ ] HTTP Request sem error handling → SEVERITY: HIGH
- [ ] Loop sem batch limit → SEVERITY: MEDIUM
- [ ] Credenciais no JSON → SEVERITY: CRITICAL
- [ ] Nós desconectados (dead code) → SEVERITY: LOW
- [ ] Monolithic flow (>30 nós sem sub-workflow) → SEVERITY: MEDIUM
- [ ] Set node manipulando credenciais → SEVERITY: HIGH

## Output Format

```
## Análise do Fluxo: {workflow_name}

### Nós ({count})
| # | Nome | Tipo n8n | EIP Pattern |
|---|------|----------|-------------|
| 1 | {name} | {type} | {pattern} |

### Grafo de Conexões
{ASCII representation}

### Trigger(s)
- {trigger_name} ({trigger_type})

### Complexity
- Score: {score} ({classification})
- Branches: {count}
- Loops: {count}
- Merges: {count}

### Anti-patterns ({count})
| # | Descrição | Severidade | Recomendação |
|---|-----------|-----------|--------------|
```

## Acceptance Criteria

- [ ] **AC-1:** 100% dos nós listados com type e pattern
- [ ] **AC-2:** Grafo de conexões completo
- [ ] **AC-3:** Complexity score calculado e classificado
- [ ] **AC-4:** Anti-patterns listados com severidade e recomendação

---
_Task Version: 1.0.0_
_Pattern: HO-TP-001_
