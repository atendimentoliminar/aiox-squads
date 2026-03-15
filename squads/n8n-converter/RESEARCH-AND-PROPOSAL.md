# Squad n8n-converter — Research & Proposal

> **Data:** 2026-03-02
> **Gerado por:** Squad Architect (squad-chief)
> **Status:** Pre-creation research

---

## 1. Contexto

Squad para converter e criar automações que antes eram do n8n e agora devem ser criadas como aplicações nativas AIOS. Essas aplicações poderão usar os executores: **humano, agente, worker e clone**.

O usuário sempre dirá que automação faria no n8n, ou trará um JSON de um fluxo já existente no n8n e pedirá para converter em aplicação.

---

## 2. Registry Check

Nenhum squad existente cobre conversão n8n → AIOS. O mais próximo é `hybrid-ops-squad` (BPMN, ClickUp, process-mapping), mas com foco diferente (operações híbridas, não conversão de automações).

---

## 3. Iterative Research

### Iteration 1: Broad Research — 8 nomes mapeados

Mapeamento do universo de workflow automation, orchestration e conversion patterns.

### Iteration 2: Devil's Advocate

Questionamento: "Estes experts precisam ser CLONADOS como personas ou são REFERÊNCIA metodológica?"

Para um squad de **conversão n8n → AIOS**, a maioria dos experts são **fontes de metodologia**, não personas para clonar. O squad precisa de agents **FUNCIONAIS** (parser, translator, builder), não de clones de pensadores.

**Decisão:** Este é um squad **técnico-operacional**, não um squad de thought-leaders. Os agents serão funcionais, com heurísticas extraídas dos frameworks desses experts.

### Iteration 3: Framework Validation

| Expert | Framework Documentado | Útil Para | Score | Status |
|--------|----------------------|-----------|-------|--------|
| **Gregor Hohpe** | 65 Enterprise Integration Patterns | Mapear nós n8n → padrões de código | 15/15 | REFERÊNCIA |
| **Bernd Ruecker** | Orchestration vs Choreography + BPMN | Decidir arquitetura da app convertida | 14/15 | REFERÊNCIA |
| **Wil van der Aalst** | 43 Workflow Patterns (workflowpatterns.com) | Taxonomia de control-flow para parser | 14/15 | REFERÊNCIA |
| **Chris Richardson** | Saga Pattern + microservices.io | Transações distribuídas na conversão | 13/15 | REFERÊNCIA |
| **Temporal.io** | Durable Execution (plataforma) | Padrão de implementação nativa | 13/15 | PLATAFORMA |

---

## 4. Expert Detail — Frameworks Documentados

### 4.1 Gregor Hohpe — Enterprise Integration Patterns

- **Role:** Enterprise Strategist at AWS; ex-Technical Director at Google Cloud
- **Framework:** 65 patterns de integração (Message Channel, Message Router, Splitter, Aggregator, Correlation ID, Dead Letter Channel, etc.)
- **Obras:**
  - *Enterprise Integration Patterns* (2004, Addison-Wesley, com Bobby Woolf) — 65 named patterns
  - *The Software Architect Elevator* (2020, O'Reilly)
  - Site: [enterpriseintegrationpatterns.com](https://www.enterpriseintegrationpatterns.com/)
- **Por que replicável:** Os 65 EIP patterns são primitivas nomeadas, diagramadas, language-agnostic. Toda plataforma moderna (n8n, Kafka, MuleSoft) implementa esses patterns. A migração n8n→código mapeia visualmente para nomes de EIP patterns.

### 4.2 Bernd Ruecker — Practical Process Automation

- **Role:** Co-founder e Chief Technologist na Camunda
- **Framework:** Orchestration-vs-choreography decision methodology; BPMN como spec executável de workflows
- **Obras:**
  - *Practical Process Automation* (2021, O'Reilly) — texto definitivo para converter lógica de processo em implementações de workflow engine
  - *Real-Life BPMN* (5th Edition)
  - [Microservices Workflow Automation Cheat Sheet](https://camunda.com/blog/2020/02/the-microservices-workflow-automation-cheat-sheet/)
- **Por que replicável:** O "cheat sheet" caminha por: quando embutir workflow logic no código, quando externalizar para engine, e como identificar "happy path + exception paths".

### 4.3 Wil van der Aalst — Workflow Patterns Initiative

- **Role:** Distinguished Professor at RWTH Aachen; Chief Scientist at Celonis
- **Framework:** 43+ control-flow patterns, 40+ data patterns, resource patterns
- **Obras:**
  - *Workflow Patterns: The Definitive Guide* (MIT Press, 2016)
  - *Process Mining: Data Science in Action* (Springer, 2nd edition)
  - Site: [workflowpatterns.com](http://www.workflowpatterns.com/)
- **Por que replicável:** Taxonomia completa de todo constructo possível em workflow. Mapear n8n para esses patterns identifica exatamente qual constructo de programação cada nó requer.

### 4.4 Chris Richardson — Microservices Patterns

- **Role:** Software architect; Founder of Eventuate.io
- **Framework:** Catálogo de patterns microservices em [microservices.io](https://microservices.io/patterns/)
- **Obras:**
  - *Microservices Patterns* (Manning) — Saga, CQRS, Event Sourcing, Outbox Pattern
  - [Saga pattern](https://microservices.io/patterns/data/saga.html) com variantes orchestration e choreography
- **Por que replicável:** Saga Pattern + Outbox Pattern são exatamente o framework necessário quando converter n8n workflows (que lidam com falhas invisivelmente) para código (onde é preciso lidar explicitamente com transações distribuídas).

### 4.5 Temporal.io — Durable Execution Platform

- **Framework:** Workflow logic como código normal (Go, Java, Python, TypeScript) com persistência automática de estado
- **Patterns documentados:**
  - [Saga pattern made easy](https://temporal.io/blog/saga-pattern-made-easy)
  - [Use Cases and Design Patterns](https://docs.temporal.io/evaluate/use-cases-design-patterns)
- **Mapeamento n8n:**
  - n8n nodes = Temporal Activities
  - n8n workflow = Temporal Workflow
  - n8n trigger = Temporal start signal ou schedule
  - n8n error workflow = Temporal compensation logic

### 4.6 Referências Complementares

| Expert/Plataforma | Contribuição |
|-------------------|-------------|
| **Kai Waehner** (Confluent) | "Shift Left Architecture" — migração de batch/cron para streaming |
| **Ben Stopford** (Confluent) | *Designing Event-Driven Systems* — events como source of truth |
| **Oskar Dudycz** | Workflow Engine usando event store como backend de execução durável |
| **Inngest** | Step-based durable functions com step.run() checkpoints |
| **Dapr Workflows** | Activity execution, child workflows, external event waiting |

---

## 5. Core Patterns: Conversão n8n → Código

### 5.1 Structural Mapping (n8n Nodes → Code Constructs)

| n8n Construct | Code Equivalent | Pattern Reference |
|---|---|---|
| Trigger node (Webhook, Schedule, Event) | HTTP handler / Cron job / Event consumer | EIP: Message Endpoint |
| Set node (data transformation) | Pure mapping function / DTO transformation | EIP: Message Translator |
| IF node (conditional branching) | if/switch statement ou Router pattern | EIP: Content-Based Router; WCP-4 |
| Switch node (multiple branches) | Strategy pattern ou Router map | EIP: Message Router; WCP-6 |
| Merge node (join parallel branches) | Promise.all() / Aggregator | EIP: Aggregator; WCP-3 |
| HTTP Request node | HTTP client com retry + timeout | EIP: Service Activator |
| Execute Workflow (sub-workflow) | Function call ou child workflow | Workflow decomposition |
| Wait node | step.sleep() / setTimeout / Timer | EIP: Delay Channel |
| Error Trigger node | try/catch + Dead Letter Queue | EIP: Dead Letter Channel |
| Loop node | for...of com Activity wrapping | WCP-21 (Structured Loop) |
| n8n credentials store | Secrets manager (Vault, env vars) | Security pattern |

### 5.2 Os 5 Core Migration Patterns

**Pattern 1: Trigger-Handler Separation**
- n8n conflata detecção de trigger e lógica de workflow em um JSON blob
- Código: separar infraestrutura de trigger (HTTP server, message consumer, cron) da lógica do handler (funções puras)

**Pattern 2: Activity Encapsulation**
- Cada nó n8n que chama serviço externo vira uma Activity isolada com: retry policy, timeout, idempotency key, error classification

**Pattern 3: State Externalization**
- n8n não armazena estado entre execuções por default
- Nós "Wait" ou polling loops requerem estado externo: DB record, workflow engine checkpoint, ou step function state

**Pattern 4: Saga for Multi-Step Transactions**
- Workflows n8n que chamam múltiplos serviços sem rollback são sagas implícitas
- Código: saga explícita com compensating transactions

**Pattern 5: Observability by Design**
- n8n tem logs built-in; código requer instrumentação explícita
- Structured logging em cada boundary de activity, distributed tracing, métricas

### 5.3 Ferramentas Existentes de Conversão n8n→Code

| Tool | Target | Abordagem | Status |
|---|---|---|---|
| [n8n2py.me](https://n8n2py.me/) | Python (FastAPI) | Upload JSON → projeto FastAPI | Comercial |
| [n8n-to-python-transpiler](https://github.com/francofuji/n8n-to-python-transpiler) | Python | Dispatcher modular; mapeia node types → handlers | Open source |
| n8n TypeScript alpha tool | TypeScript | Converte workflow JSON para TypeScript | Alpha |

---

## 6. Anti-Patterns Documentados

### De Bernd Ruecker / Camunda:
- **Orchestrating everything centrally** — tratar workflow engine como system of record
- **Hiding business logic in glue code** — lógica em adapters HTTP, não em steps explícitos
- **Missing compensation** — modelar só happy path sem rollback

### Da comunidade n8n:
- **Automation sprawl** — centenas de flows sem governance ou documentação
- **Monolithic workflows** — toda lógica em um único fluxo gigante
- **No error classification** — tratar falhas transientes e permanentes igualmente
- **Credential sharing** — passar credenciais por data nodes ao invés de secrets layer

### Do cânone EIP (Hohpe/Woolf):
- **Smart pipes, dumb endpoints** — lógica de transformação no integration layer
- **Point-to-point coupling** — chamadas diretas sem message channel

---

## 7. AIOS Executor Framework (Referência Interna)

### 4 Tipos de Executor

| Executor | Custo | Velocidade | Consistência | Quando Usar |
|----------|-------|------------|-------------|-------------|
| **Humano** | $$$ | Lento | Variável | Decisões críticas, criatividade, relacionamentos |
| **Agente** | $$$$ | Rápido | 85-95% | Análise, geração de conteúdo, pattern matching |
| **Worker** | $ | Muito Rápido | 100% | Tasks determinísticas, APIs, file ops |
| **Clone** | $$$ | Rápido | 85-97% | Execução com persona específica |

### Decision Tree (6 perguntas)

```
Q1: Output 100% previsível? → YES → Q2 | NO → Q3
Q2: Função pura? → YES → Q2a | NO → Q3
Q2a: Existe lib/API? → YES → WORKER | NO → Q2b
Q2b: Vale codificar (3+ execuções)? → YES → WORKER | NO → AGENT
Q3: Interpretação de linguagem natural? → YES → Q4 | NO → Q5
Q4: Impacto de erro significativo? → YES → HYBRID | NO → AGENT
Q5: Julgamento estratégico? → YES → Q6 | NO → Q4
Q6: AI pode assistir? → YES → HYBRID | NO → HUMAN
```

### Evolução de Executores

```
HUMAN → HYBRID (task se torna repetível com padrão)
HYBRID → AGENT (approval rate > 95% por 30 dias)
AGENT → WORKER (task se torna determinística)
```

---

## 8. Proposta de Arquitetura do Squad

### Squad: `n8n-converter`

| Tier | Agent | Executor | Função |
|------|-------|----------|--------|
| **T0** | `converter-chief` | Agente | Orquestra o pipeline de conversão. Recebe n8n JSON ou descrição textual |
| **T1** | `flow-analyzer` | Worker + Agente | Parseia JSON n8n, identifica nós, mapeia dependências, classifica padrões (EIP) |
| **T1** | `architecture-translator` | Agente | Converte o grafo de nós em arquitetura AIOS (tasks, workflows, executors) |
| **T1** | `executor-mapper` | Agente | Aplica decision tree de executores (humano/agente/worker/clone) a cada step |
| **T2** | `app-builder` | Agente | Gera código da aplicação AIOS nativa (tasks, workflows, config, templates) |
| **T2** | `n8n-interpreter` | Agente | Interpreta descrições textuais ("eu faria X no n8n") e traduz para spec técnica |

### Workflows Previstos

1. **wf-convert-n8n-json** — Recebe JSON → analisa → arquiteta → mapeia executores → gera app
2. **wf-describe-to-app** — Recebe descrição textual → interpreta → spec → mesma pipeline
3. **wf-validate-conversion** — Valida se a app AIOS cobre 100% do fluxo original

### Executores nas Apps Geradas

Cada app gerada terá steps com executores atribuídos:

| Executor | Quando usar na app gerada |
|----------|--------------------------|
| **Humano** | Aprovações, decisões estratégicas, revisões críticas |
| **Agente** | Análise, geração de conteúdo, interpretação de dados |
| **Worker** | Chamadas API, transformações de dados, file ops, CRON |
| **Clone** | Execução com persona específica (ex: responder como expert) |

---

## 9. Fontes

- [Enterprise Integration Patterns — Gregor Hohpe](https://www.enterpriseintegrationpatterns.com/)
- [Practical Process Automation — Bernd Ruecker (O'Reilly)](https://www.oreilly.com/library/view/practical-process-automation/9781492061441/)
- [Workflow Patterns — workflowpatterns.com](http://www.workflowpatterns.com/)
- [Microservices Patterns — Chris Richardson](https://microservices.io/patterns/)
- [Temporal.io — Use Cases and Design Patterns](https://docs.temporal.io/evaluate/use-cases-design-patterns)
- [Designing Event-Driven Systems — Ben Stopford (Confluent)](https://www.confluent.io/resources/ebook/designing-event-driven-systems/)
- [n8n2py.me — Convert n8n to Python](https://n8n2py.me/)
- [n8n-to-python-transpiler — GitHub](https://github.com/francofuji/n8n-to-python-transpiler)
- AIOS Internal: `executor-matrix-framework.md`, `executor-decision-tree.md`
