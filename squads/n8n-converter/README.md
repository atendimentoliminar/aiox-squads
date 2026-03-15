# n8n to AIOS Converter

## Overview

Squad para converter automações n8n em aplicações nativas AIOS. Recebe JSON exportado do n8n ou descrição textual de automação e produz app completa com tasks, workflows, config e README — cada step com o executor ótimo (humano, agente, worker, clone).

## Purpose

Eliminar a dependência do n8n para automações, migrando para apps nativas AIOS que oferecem:
- **Executores otimizados** — worker para o determinístico, agent para o criativo, clone para personas
- **Versionamento** — git, PRs, code review
- **Testabilidade** — acceptance criteria em cada task
- **Observabilidade** — logging e métricas estruturadas
- **Composabilidade** — reusar tasks entre apps

## When to Use

Use este squad quando:
- Quer converter uma automação n8n existente (tem o JSON)
- Quer descrever textualmente uma automação que faria no n8n
- Precisa migrar de n8n para AIOS
- Quer analisar um fluxo n8n sem converter (diagnóstico)

## What's Included

### Agents (6)

| Agent | Tier | Função |
|-------|------|--------|
| `converter-chief` | T0 | Orquestra o pipeline de conversão |
| `flow-analyzer` | T1 | Parseia JSON n8n, identifica patterns |
| `architecture-translator` | T1 | Traduz grafo para arquitetura AIOS |
| `executor-mapper` | T1 | Atribui executores (worker/agent/clone/human) |
| `app-builder` | T2 | Gera código da app AIOS |
| `n8n-interpreter` | T2 | Interpreta descrições textuais |

### Tasks (4)

| Task | Executor | Descrição |
|------|----------|-----------|
| `convert-n8n-json` | Pipeline | Pipeline completo JSON → App AIOS |
| `describe-to-spec` | Agent | Descrição textual → spec técnica |
| `analyze-n8n-flow` | Agent | Análise diagnóstica do fluxo |
| `map-executors` | Agent | Mapeamento de executores |

### Workflows (1)

| Workflow | Fases | Descrição |
|----------|-------|-----------|
| `wf-convert-n8n-json` | 5 | Pipeline completo de conversão |

### Checklists (1)

| Checklist | Descrição |
|-----------|-----------|
| `conversion-validation` | Validação de coverage 100% |

### Data (1)

| Data | Descrição |
|------|-----------|
| `n8n-node-mapping.yaml` | Mapeamento n8n nodes → AIOS patterns (EIP) |

## Usage Examples

### 1. Converter JSON n8n

```
@n8n-converter:converter-chief

*convert-json
[cole o JSON n8n aqui]
```

### 2. Descrever automação

```
@n8n-converter:converter-chief

*describe
"Quando chegar um email com 'urgente', resumir com IA e mandar no Slack"
```

### 3. Analisar sem converter

```
@n8n-converter:converter-chief

*analyze
[cole o JSON n8n aqui]
```

## Pack Structure

```
squads/n8n-converter/
├── agents/
│   ├── converter-chief.md
│   ├── flow-analyzer.md
│   ├── architecture-translator.md
│   ├── executor-mapper.md
│   ├── app-builder.md
│   └── n8n-interpreter.md
├── tasks/
│   ├── convert-n8n-json.md
│   ├── describe-to-spec.md
│   ├── analyze-n8n-flow.md
│   └── map-executors.md
├── workflows/
│   └── wf-convert-n8n-json.yaml
├── checklists/
│   └── conversion-validation.md
├── data/
│   └── n8n-node-mapping.yaml
├── templates/
├── config.yaml
├── README.md
└── RESEARCH-AND-PROPOSAL.md
```

## Key Features

1. **Pattern-based conversion** — Usa Enterprise Integration Patterns (Hohpe) como vocabulário de tradução
2. **Executor optimization** — Decision tree de 6 perguntas para escolher executor ótimo por step
3. **Coverage 100%** — Validação garante que nenhuma funcionalidade é perdida na conversão
4. **Dual input** — Aceita JSON n8n exportado OU descrição textual
5. **Anti-pattern detection** — Identifica problemas no fluxo original antes de converter

## Executor Types

| Executor | Custo | Velocidade | Quando Usar |
|----------|-------|------------|-------------|
| **Worker** | $ | Muito rápido | API calls, data transform, cron, file ops |
| **Agent** | $$$$ | Rápido | Análise, geração de conteúdo, NLU |
| **Clone** | $$$ | Rápido | Respostas com persona, frameworks de experts |
| **Humano** | $$$ | Lento | Aprovações, decisões estratégicas |

## Methodology References

- **Enterprise Integration Patterns** — Gregor Hohpe & Bobby Woolf
- **Workflow Patterns** — Wil van der Aalst (workflowpatterns.com)
- **Practical Process Automation** — Bernd Ruecker
- **AIOS Executor Matrix** — executor-decision-tree.md

---

**Ready to convert your n8n automations to native AIOS apps? Let's get started!**

_Version: 1.0.0_
_Compatible with: AIOS-FULLSTACK v4+_
