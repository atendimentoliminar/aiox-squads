# Map Executors

**Task ID:** `map-executors`
**Pattern:** HO-TP-001
**Version:** 1.0.0

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Map Executors |
| **status** | `pending` |
| **responsible_executor** | executor-mapper |
| **execution_type** | `Agent` |
| **input** | Lista de tasks AIOS (da arquitetura traduzida) |
| **output** | Tabela de executor por task com rationale |
| **action_items** | 4 steps |
| **acceptance_criteria** | 4 criteria |

## Overview

Atribuir o executor ótimo (humano, agente, worker, clone) para cada task de uma app AIOS gerada. Usa o decision tree de 6 perguntas para cada task.

## Action Items

### Step 1: Load Decision Tree

Usar o decision tree de 6 perguntas:
```
Q1: Output 100% previsível? → YES → Q2 | NO → Q3
Q2: Função pura? → YES → Q2a | NO → Q3
Q2a: Existe lib/API? → YES → WORKER | NO → Q2b
Q2b: 3+ execuções? → YES → WORKER | NO → AGENT
Q3: Interpretação NLU? → YES → Q4 | NO → Q5
Q4: Impacto erro alto? → YES → HYBRID | NO → AGENT
Q5: Julgamento estratégico? → YES → Q6 | NO → Q4
Q6: AI pode assistir? → YES → HYBRID | NO → HUMAN
```

Regra adicional para **Clone:**
- Se task requer persona específica → CLONE
- Se task aplica framework de expert → CLONE

### Step 2: Apply to Each Task

Para cada task:
1. Responder as 6 perguntas
2. Chegar no executor
3. Documentar rationale (qual pergunta levou à decisão)
4. Verificar se clone se aplica

### Step 3: Calculate Cost Estimate

| Executor | Custo por execução (estimado) |
|----------|-------------------------------|
| Worker | ~$0.001 |
| Agent | ~$0.05 |
| Clone | ~$0.05 |
| Hybrid | ~$0.03 |
| Human | ~$5.00 (tempo humano) |

Somar custo total por execução da app.

### Step 4: Document Evolution Paths

Para cada step que não é worker:
- Descrever condição para evoluir (ex: "quando prompt se torna template fixo → worker")
- Estimar quando pode evoluir (ex: "após 30 dias com >95% approval rate")

## Output Format

```
## Executor Mapping: {app-name}

| # | Task | Executor | Custo | Rationale | Evolution Path |
|---|------|----------|-------|-----------|----------------|
| 1 | {name} | {executor} | {cost} | {rationale} | {path} |

**Custo total por execução:** ${total}
**Distribuição:** {W} Workers, {A} Agents, {C} Clones, {H} Humans
```

## Acceptance Criteria

- [ ] **AC-1:** Toda task tem executor atribuído
- [ ] **AC-2:** Toda atribuição tem rationale documentado
- [ ] **AC-3:** Custo estimado calculado
- [ ] **AC-4:** Evolution paths documentados para executores não-worker

---
_Task Version: 1.0.0_
_Pattern: HO-TP-001_
