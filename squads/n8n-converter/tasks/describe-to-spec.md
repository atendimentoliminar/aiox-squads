# Describe Automation to Technical Spec

**Task ID:** `describe-to-spec`
**Pattern:** HO-TP-001
**Version:** 1.0.0

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Describe Automation to Spec |
| **status** | `pending` |
| **responsible_executor** | n8n-interpreter |
| **execution_type** | `Agent` |
| **input** | Descrição textual da automação |
| **output** | Spec técnica formatada e confirmada |
| **action_items** | 4 steps |
| **acceptance_criteria** | 4 criteria |

## Overview

Quando o usuário descreve textualmente a automação que faria no n8n (ao invés de fornecer JSON), este task interpreta a descrição, extrai os componentes técnicos, e gera uma spec formatada para confirmação.

## Input

- **Descrição textual** (String) — Descrição em linguagem natural da automação
  - Required: Yes
  - Source: Usuário (no chat)
  - Idiomas: Português ou Inglês

## Output

- **Spec técnica** (Markdown) — Spec formatada com trigger, steps, integrations, conditions, error handling
  - Format: Markdown estruturado

## Action Items

### Step 1: Parse Intent

Extrair da descrição:
- **TRIGGER:** O que inicia? (webhook, schedule, email, manual, evento)
- **STEPS:** Ações em ordem
- **INTEGRATIONS:** Serviços usados (Slack, email, API, DB, LLM)
- **CONDITIONS:** Branches/decisões (se X, faça Y)
- **ERRORS:** O que acontece se falhar? (propor default se não mencionado)
- **FREQUENCY:** Com que frequência roda?

### Step 2: Identify & Ask Gaps (max 3 perguntas)

Verificar o que está faltando:
- Trigger não mencionado? → Perguntar
- Frequência não mencionada? → Perguntar
- Serviço não claro? → Perguntar
- Se mais de 3 gaps → apresentar spec parcial com [A DEFINIR]

### Step 3: Generate Spec

Formato da spec:
```
**Spec: {nome-da-automação}**

**Trigger:** {tipo} — {detalhes}

**Steps:**
1. **{ação}** — Integração: {serviço} — Executor sugerido: {tipo}
2. ...

**Conditions:**
- Se {condição} → {ação}

**Error Handling:**
- {cenário} → {ação}

**Frequency:** {frequência}
```

### Step 4: Confirm with User

Apresentar spec e perguntar: "Confirma essa interpretação?"
- Se SIM → handoff para converter-chief (pipeline de conversão)
- Se NÃO → ajustar conforme feedback

## Acceptance Criteria

- [ ] **AC-1:** Trigger identificado na spec
- [ ] **AC-2:** Todos os steps listados com integração e executor sugerido
- [ ] **AC-3:** Usuário confirmou a spec
- [ ] **AC-4:** Gaps marcados como [A DEFINIR] se não resolvidos

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `convert-n8n-json` (steps 3-6, usando spec como input) |
| **Trigger** | Usuário confirma spec |
| **Executor** | converter-chief |

---
_Task Version: 1.0.0_
_Pattern: HO-TP-001_
