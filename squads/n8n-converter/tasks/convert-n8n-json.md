# Convert n8n JSON to AIOS App

**Task ID:** `convert-n8n-json`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Convert n8n JSON |
| **status** | `pending` |
| **responsible_executor** | converter-chief (orchestrates), flow-analyzer + architecture-translator + executor-mapper + app-builder |
| **execution_type** | `Agent` (pipeline orchestration) |
| **input** | n8n workflow JSON |
| **output** | App AIOS completa (pasta com tasks, workflows, config, README) |
| **action_items** | 6 steps |
| **acceptance_criteria** | 5 criteria |

## Overview

Pipeline completo para converter um JSON exportado do n8n em uma aplicação AIOS nativa. O pipeline tem 5 fases sequenciais com checkpoint entre cada uma.

## Input

- **n8n JSON** (JSON) — Workflow exportado do n8n (File > Export Workflow)
  - Required: Yes
  - Source: Usuário (cole no chat ou forneça path do arquivo)

## Output

- **App AIOS** (Directory) — Pasta com todos os artefatos da app
  - Destination: `squads/n8n-converter/outputs/{app-name}/` ou path definido pelo usuário
  - Format: Tasks (.md), Workflows (.yaml), Config (.yaml), README (.md)

## Action Items

### Step 1: Receive & Validate JSON

1. Receber JSON do usuário (colado no chat ou path de arquivo)
2. Validar que é JSON válido
3. Validar que tem estrutura n8n (campos: nodes, connections)
4. Se inválido → reportar erro específico

**Veto condition:** JSON inválido ou sem estrutura n8n → PARAR

### Step 2: Parse & Analyze (flow-analyzer)

1. Carregar `data/n8n-node-mapping.yaml`
2. Extrair todos os nós: type, name, parameters
3. Extrair todas as conexões: source → target
4. Identificar trigger(s) (nós sem conexão de entrada)
5. Classificar cada nó com EIP pattern
6. Calcular complexity score
7. Detectar anti-patterns

**Checkpoint:** Apresentar análise ao usuário:
- Nós identificados com patterns
- Complexity score
- Anti-patterns (se houver)
- Perguntar: "Análise correta? Prosseguir com conversão?"

### Step 3: Translate Architecture (architecture-translator)

1. Mapear triggers para entry points AIOS
2. Agrupar nós em tasks AIOS
3. Definir workflows (se 3+ tasks)
4. Projetar error handling por task
5. Projetar state management (se Wait nodes)

**Checkpoint:** Apresentar arquitetura ao usuário:
- Directory structure proposta
- Lista de tasks com escopo
- Workflow structure
- Perguntar: "Arquitetura correta? Ajustar algo?"

### Step 4: Map Executors (executor-mapper)

1. Para cada task, aplicar decision tree de 6 perguntas
2. Atribuir executor (worker/agent/clone/human) com rationale
3. Calcular custo estimado por execução
4. Documentar evolution paths

**Checkpoint:** Apresentar mapeamento ao usuário:
- Tabela task → executor → rationale
- Custo estimado
- Perguntar: "Executores corretos? Ajustar?"

### Step 5: Generate App (app-builder)

1. Criar directory structure
2. Gerar config.yaml
3. Gerar todas as tasks (.md) com 8 campos obrigatórios
4. Gerar workflow(s) (.yaml) com checkpoints
5. Gerar README.md
6. Verificar que credenciais estão em env vars (nunca hardcoded)

### Step 6: Validate Coverage

1. Listar todos os nós n8n originais
2. Verificar que cada nó tem equivalente na app AIOS
3. Calcular coverage %
4. Se coverage < 100% → listar gaps e propor soluções

**Checkpoint:** Relatório de coverage
- Coverage: X%
- Gaps (se houver)
- Recomendações

## Acceptance Criteria

- [ ] **AC-1:** 100% dos nós n8n mapeados para equivalente AIOS
- [ ] **AC-2:** Cada task tem 8 campos obrigatórios (task anatomy)
- [ ] **AC-3:** Workflows têm checkpoints
- [ ] **AC-4:** Error handling presente em tasks com side effects
- [ ] **AC-5:** Zero credenciais hardcoded

## Error Handling

### JSON Inválido
- **Trigger:** JSON não parseia ou não tem estrutura n8n
- **Detection:** JSON.parse() falha ou campos 'nodes'/'connections' ausentes
- **Recovery:** Reportar erro específico, pedir JSON corrigido
- **Prevention:** Validar antes de qualquer processamento

### Nó Desconhecido
- **Trigger:** Tipo de nó n8n não encontrado no mapping
- **Detection:** Lookup em n8n-node-mapping.yaml retorna null
- **Recovery:** Marcar como [UNMAPPED], propor equivalente genérico (HTTP Request)
- **Prevention:** Manter mapping atualizado

### Fluxo Muito Complexo
- **Trigger:** Complexity score > 30 ou > 50 nós
- **Detection:** Score calculation
- **Recovery:** Sugerir decomposição em sub-workflows antes de converter
- **Prevention:** Alertar no Step 2

## Validation Checklist (HO-TP-001)

- [x] `task_name` follows "Verb + Object" format
- [x] `status` is one of: pending | in_progress | completed
- [x] `responsible_executor` is clearly specified
- [x] `execution_type` is one of: Human | Agent | Hybrid | Worker
- [x] `input` array has at least 1 item
- [x] `output` array has at least 1 item
- [x] `action_items` has clear, actionable steps
- [x] `acceptance_criteria` has measurable criteria

---
_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
