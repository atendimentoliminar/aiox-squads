<p align="center">
  <img src="doc/assets/header.png" alt="AIOX Squads — times de IA especialistas, prontos para deploy" width="720" />
</p>

<p align="center">
  <a href="#quickstart"><strong>Quickstart</strong></a> &middot;
  <a href="#catalogo-de-squads"><strong>Catálogo</strong></a> &middot;
  <a href="https://github.com/SynkraAI/aiox-squads"><strong>GitHub</strong></a> &middot;
  <a href="https://github.com/SynkraAI/aiox-squads/discussions"><strong>Discussões</strong></a>
</p>

<p align="center">
  <a href="https://github.com/SynkraAI/aiox-squads/blob/main/LICENSE"><img src="https://img.shields.io/badge/licença-MIT-blue" alt="MIT License" /></a>
  <a href="https://github.com/SynkraAI/aiox-squads/stargazers"><img src="https://img.shields.io/github/stars/SynkraAI/aiox-squads?style=flat" alt="Stars" /></a>
  <a href="https://github.com/SynkraAI/aiox-squads"><img src="https://img.shields.io/badge/squads-21-blue" alt="Squads" /></a>
  <a href="https://github.com/SynkraAI/aiox-squads"><img src="https://img.shields.io/badge/agentes-184+-purple" alt="Agents" /></a>
  <a href="https://github.com/SynkraAI/aiox-squads"><img src="https://img.shields.io/badge/tasks-499+-green" alt="Tasks" /></a>
</p>

<p align="center">
  <a href="doc/README.en.md">🇺🇸 English version</a>
</p>

<br/>

## O que é AIOX Squads?

# Times de IA especialistas, open-source, que você pluga em qualquer projeto

**Se um agente de IA é um _funcionário_, um Squad é um _departamento_ inteiro.**

AIOX Squads é uma biblioteca de times autônomos de agentes IA clonados de especialistas reais, prontos para o Claude Code. Cada squad empacota agentes, tasks, workflows e quality gates numa única pasta que você joga dentro do seu projeto. De copywriting a cybersecurity, de brand strategy a data analytics — cada squad é um time de especialistas de classe mundial pronto para ativar.

**Não escreva prompts. Implante departamentos.**

|        | Passo               | Exemplo                                                            |
| ------ | ------------------- | ------------------------------------------------------------------ |
| **01** | Escolha um squad    | _"Preciso de copywriting de elite."_                                |
| **02** | Jogue no projeto    | Copie a pasta para seu projeto. Um comando.                         |
| **03** | Ative o chief       | `@copy-chief` — o orquestrador do squad roteia seu trabalho para o especialista certo. |

<br/>

> **60+ mentes de especialistas clonadas.** Agentes não dão respostas genéricas de LLM. Cada um carrega o Voice DNA, Thinking DNA e heurísticas de decisão de um especialista real — Gary Halbert, Ray Dalio, Alex Hormozi, Eugene Schwartz e dezenas mais.

<br/>

<div align="center">
<table>
  <tr>
    <td align="center"><strong>Funciona<br/>com</strong></td>
    <td align="center"><img src="https://cdn.simpleicons.org/anthropic/181818" width="28" alt="Claude" /><br/><sub>Claude Code</sub></td>
    <td align="center"><img src="https://cdn.simpleicons.org/openai/181818" width="28" alt="Adaptável" /><br/><sub>Adaptável</sub></td>
  </tr>
</table>

<em>Otimizado para Claude Code. Portável para qualquer LLM que suporte agentes estruturados.</em>

</div>

<br/>

## AIOX Squads é pra você se

- ✅ Você quer **times de IA especialistas prontos**, não agentes em branco que você precisa promptar do zero
- ✅ Você precisa de **conhecimento específico de domínio** — copywriting, segurança, dados, branding — não respostas genéricas
- ✅ Você quer agentes que **pensam como especialistas reais**, com frameworks clonados, heurísticas e árvores de decisão
- ✅ Você está cansado de escrever **os mesmos prompts complexos** repetidamente em cada projeto
- ✅ Você quer **outputs validados por qualidade** com checklists e gates de scoring embutidos
- ✅ Você quer **compor múltiplos times** — squad de copy + squad de brand + squad de data — no mesmo projeto
- ✅ Você quer **criar e compartilhar seus próprios squads** com uma estrutura padronizada e validada

<br/>

## Features

<table>
<tr>
<td align="center" width="33%">
<h3>🧬 Clonagem de Especialistas</h3>
Agentes carregam Voice DNA e Thinking DNA de especialistas reais. Não são prompts genéricos — são frameworks reais.
</td>
<td align="center" width="33%">
<h3>📦 Drop-in Ready</h3>
Copie uma pasta, ative o chief. Cada squad é totalmente self-contained — agentes, tasks, templates, dados.
</td>
<td align="center" width="33%">
<h3>🏗️ Arquitetura de Tiers</h3>
Chief roteia → Masters executam → Specialists assistem → Support valida. Cadeia de comando clara.
</td>
</tr>
<tr>
<td align="center">
<h3>✅ Quality Gates</h3>
Todo squad é pontuado e validado. Sistema de qualidade em 4 tiers garante que os agentes realmente entregam.
</td>
<td align="center">
<h3>🔀 Composável</h3>
Misture squads livremente. Rode copy + brand + data no mesmo projeto. Eles sabem fazer handoff entre si.
</td>
<td align="center">
<h3>🏭 Squad Creator</h3>
Crie seus próprios squads a partir de templates. Workflow guiado de 6 fases. Auto-validado.
</td>
</tr>
<tr>
<td align="center">
<h3>📊 Task-First</h3>
Tasks são a interface, não chat. Workflows executáveis com inputs, outputs e critérios definidos.
</td>
<td align="center">
<h3>🎯 Determinístico</h3>
Heurísticas com regras SE/ENTÃO e condições de veto. Agentes não alucinam estratégia — seguem playbooks provados.
</td>
<td align="center">
<h3>🌍 Open Source</h3>
Licença MIT. Use comercialmente. Fork livremente. Contribua de volta.
</td>
</tr>
</table>

<br/>

## Problemas que o AIOX Squads resolve

| Sem Squads | Com Squads |
|---|---|
| ❌ Você gasta 30 minutos escrevendo um prompt de copywriting, e o agente ainda soa genérico. | ✅ `@copy-chief` roteia seu pedido para o agente clonado do Gary Halbert. O Voice DNA cuida do resto. |
| ❌ Cada projeto novo começa do zero — sem conhecimento, sem frameworks, sem estrutura. | ✅ Jogue uma pasta de squad no projeto. Acesso instantâneo a 60+ mentes especialistas com heurísticas provadas. |
| ❌ Você pede "estratégia de marca" e recebe uma redação vaga de 5 parágrafos. | ✅ O squad de brand roda tasks estruturadas com frameworks de Aaker, Keller e Ries embutidos. |
| ❌ Seu agente dá conselhos mas você não tem como validar se é realmente bom. | ✅ Toda task tem quality gates, checklists e critérios de scoring. Outputs são medidos, não esperados. |
| ❌ Você precisa de múltiplas especialidades (copy + data + design) e coordena manualmente entre elas. | ✅ Squads compõem. Protocolos de handoff permitem que agentes deleguem entre fronteiras de squads. |
| ❌ Você constrói prompts excelentes mas eles vivem em arquivos aleatórios e são impossíveis de compartilhar. | ✅ Estrutura padronizada de squad. Versione, valide, distribua. Como pacotes npm para expertise de IA. |

<br/>

## Por que AIOX Squads é diferente

|                                     |                                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Clonagem, não prompting.**        | Agentes carregam Voice DNA (como falam) e Thinking DNA (como decidem). Outputs parecem do especialista real.  |
| **Task-first, não chat-first.**     | Todo squad entrega tasks executáveis com inputs, outputs e critérios de qualidade definidos.                   |
| **Qualidade validada.**             | Sistema de validação em 4 tiers. Squads ganham badges de maturidade: DRAFT → DEVELOPING → OPERATIONAL.        |
| **Heurísticas determinísticas.**    | Regras SE/ENTÃO com condições de veto. Agentes seguem playbooks, não vibes.                                   |
| **Arquitetura composável.**         | Tier 0 roteia, Tier 1 executa, Tier 2 assiste, Tier 3 valida. Squads delegam entre fronteiras.                |
| **Conhecimento portável.**          | Frameworks de especialistas empacotados em pastas. Versionados. Compartilháveis. Forkáveis.                   |

<br/>

## O que AIOX Squads NÃO é

|                                     |                                                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Não é um framework de agentes.**  | Não construímos agentes do zero. Empacotamos conhecimento especialista em times que funcionam out of the box. |
| **Não é uma biblioteca de prompts.**| Squads são sistemas completos — agentes, tasks, workflows, checklists, templates, dados. Não só arquivos de texto. |
| **Não é um chatbot.**               | Agentes têm tasks, quality gates e protocolos de handoff. Não conversas abertas.                    |
| **Não é one-size-fits-all.**        | Cada squad é um especialista. Escolha os que precisa. Você não instala o hospital inteiro pra uma dor de cabeça. |
| **Não é preso ao Claude.**          | Otimizado para Claude Code, mas a estrutura de agentes é portável para qualquer sistema que suporte prompts estruturados. |

<br/>

## Quickstart

```bash
# 1. Clone a biblioteca
git clone https://github.com/SynkraAI/aiox-squads.git

# 2. Copie um squad para seu projeto
cp -r aiox-squads/squads/copy ./squads/copy

# 3. Ative no Claude Code
@copy-chief

# 4. Rode uma task
*create-sales-page
```

> **Requisito:** Claude Code CLI com suporte a custom agents.

<br/>

## Catálogo de Squads

### Content & Marketing

| Squad | Agentes | O que faz | Status |
|-------|---------|-----------|--------|
| [**copy**](squads/copy/) | 24 | Copywriting de elite — 24 lendas (Halbert, Schwartz, Ogilvy, Hopkins...) organizadas em tiers | 🟢 OPERATIONAL |
| [**storytelling**](squads/storytelling/) | 13 | Estrutura narrativa — Campbell, Snyder, Duarte, Harmon, Miller | 🟡 DEVELOPING |
| [**traffic-masters**](squads/traffic-masters/) | 16 | Mídia paga — Meta, Google, YouTube Ads com análise de performance | 🟡 DEVELOPING |
| [**movement**](squads/movement/) | 8 | Marketing ideológico — 8 níveis (N1–N8) de construção de movimento | 🟡 DEVELOPING |

### Business & Strategy

| Squad | Agentes | O que faz | Status |
|-------|---------|-----------|--------|
| [**advisory-board**](squads/advisory-board/) | 11 | Conselho consultivo — Dalio, Munger, Thiel, Sinek, Hoffman... | 🟡 DEVELOPING |
| [**hormozi**](squads/hormozi/) | 16 | Metodologia Alex Hormozi — offers, leads, pricing, scaling | 🟡 DEVELOPING |
| [**c-level**](squads/c-level/) | 6 | C-Suite executivo — CTO, CIO, CMO, COO, CAIO, Vision Chief | 🟡 DEVELOPING |
| [**data**](squads/data/) | 7 | Analytics & growth — CLV, health scores, community metrics, PMF | 🟢 OPERATIONAL |
| [**franchise**](squads/franchise/) | 6 | Franchising — viabilidade, COF, relação franqueador-franqueado | 🟡 DEVELOPING |
| [**spy**](squads/spy/) | 3 | Inteligência competitiva — análise de players, tendências, benchmarks | 🟡 DEVELOPING |

### Brand & Identity

| Squad | Agentes | O que faz | Status |
|-------|---------|-----------|--------|
| [**brand**](squads/brand/) | 15 | Brand strategy — Aaker, Keller, Ries, Sharp, StoryBrand, naming | 🟡 DEVELOPING |

### Technical

| Squad | Agentes | O que faz | Status |
|-------|---------|-----------|--------|
| [**cybersecurity**](squads/cybersecurity/) | 15 | Segurança ofensiva & defensiva — pentest, SOC, secure coding | 🟡 DEVELOPING |
| [**design**](squads/design/) | 8 | Design systems — tokens, componentes, Atomic Design, DesignOps | 🟡 DEVELOPING |
| [**db-sage**](squads/db-sage/) | 2 | Especialista PostgreSQL/Supabase — schema, RLS, migrations | 🟢 OPERATIONAL |
| [**etl-ops**](squads/etl-ops/) | 3 | Data pipelines — extração, transformação, carga | 🟡 DEVELOPING |
| [**domain-decoder**](squads/domain-decoder/) | 8 | Extração de domínio — engenharia reversa de regras de negócio em código brownfield | 🟡 DEVELOPING |

### Research & Knowledge

| Squad | Agentes | O que faz | Status |
|-------|---------|-----------|--------|
| [**deep-research**](squads/deep-research/) | 11 | Pesquisa sistemática — PICO, revisão sistemática, bias audit | 🔴 DRAFT |
| [**claude-code-mastery**](squads/claude-code-mastery/) | 8 | Maestria em Claude Code — hooks, MCP, subagents, config, skills | 🟡 DEVELOPING |
| [**tribunal**](squads/tribunal/) | 7 | Tribunal decisório — 5 mentes históricas como conselheiros cognitivos | 🟡 DEVELOPING |

### Meta-Squads

| Squad | Agentes | O que faz | Status |
|-------|---------|-----------|--------|
| [**squad-creator**](squads/squad-creator/) | 1 | Cria novos squads via templates e validação estrutural | 🟢 OPERATIONAL |

<br/>

## Como Squads Funcionam

### O Sistema de Tiers

Todo squad segue uma cadeia de comando clara:

```
  Tier 0 — Chief (Orquestrador)
  ├── Recebe a missão, classifica a intenção, roteia pro especialista certo.
  │
  ├── Tier 1 — Masters
  │   Especialistas primários. Executam as missões core do domínio.
  │
  ├── Tier 2 — Specialists
  │   Especialistas de nicho. Acionados pelo Tier 1 para sub-tarefas específicas.
  │
  └── Tier 3 — Support
      Utilidades compartilhadas. Quality gates, templates, analytics.
```

### Anatomia de um Agente (6 Camadas)

Todo agente é um arquivo `.md` estruturado com:

```yaml
agent:       # Identidade — nome, id, tier
persona:     # Função e estilo de comunicação
voice_dna:   # Vocabulário clonado, padrões de frase, anti-patterns
heuristics:  # Regras de decisão SE/ENTÃO com condições de veto
examples:    # Pares concretos de input/output (mín. 3)
handoffs:    # Quando parar e delegar para outro agente
```

### Quality Gates

Todo squad passa por 4 tiers de validação:

| Tier | O que valida | Bloqueante? |
|------|-------------|-------------|
| **Tier 1** | Estrutura — config.yaml, entry agent, referências | SIM |
| **Tier 2** | Cobertura — checklists, orphan tasks, data usage | SIM |
| **Tier 3** | Qualidade — prompts, coerência, documentação | Score ≥ 7.0 |
| **Tier 4** | Contextual — validação específica por tipo de squad | Weighted |

### Níveis de Maturidade

| Nível | Critérios | Badge |
|-------|-----------|-------|
| **DRAFT** | Estrutura básica, score < 7.0 | 🔴 |
| **DEVELOPING** | Score ≥ 7.0, agentes funcionais, tasks executáveis | 🟡 |
| **OPERATIONAL** | Score ≥ 9.0, testado em produção, uso real comprovado | 🟢 |

<br/>

## Crie Seu Próprio Squad

### Opção 1: Squad Creator (recomendado)

```
@squad-chief
*create-squad {domínio}
```

Workflow guiado de 6 fases: Detecção de Tipo → Elicitação de Domínio → Carregamento de Templates → Proposta de Arquitetura → Criação → Validação.

### Opção 2: Manual

```bash
mkdir -p squads/meu-squad/{agents,tasks,templates,checklists,data}
```

Crie `config.yaml`, construa seu agente chief, adicione tasks, depois valide:

```
@squad-chief
*validate-squad meu-squad
```

<br/>

## Ecossistema

AIOX Squads faz parte do ecossistema [SynkraAI](https://github.com/SynkraAI):

<div align="center">
<table>
  <tr>
    <td align="center" width="33%">
      <a href="https://github.com/SynkraAI/aiox-core"><strong>aiox-core</strong></a><br/>
      <sub>O motor de orquestração.<br/>CLI-first. 11 agentes built-in.<br/>Desenvolvimento story-driven.</sub>
    </td>
    <td align="center" width="33%">
      <a href="https://github.com/SynkraAI/aiox-dashboard"><strong>aiox-dashboard</strong></a><br/>
      <sub>Observabilidade em tempo real.<br/>Kanban, status de agentes,<br/>monitoramento de eventos ao vivo.</sub>
    </td>
    <td align="center" width="33%">
      <a href="https://github.com/SynkraAI/aiox-squads"><strong>aiox-squads</strong></a><br/>
      <sub>Times de IA especialistas.<br/>21 squads, 184+ agentes,<br/>60+ mentes clonadas.</sub>
    </td>
  </tr>
</table>
</div>

<br/>

## FAQ

**Preciso de todos os squads?**
Não. Cada squad é self-contained. Copie apenas o que precisa.

**Funciona com outros LLMs além do Claude?**
Squads são otimizados para Claude Code, mas a estrutura de agentes (persona + heurísticas + tasks) pode ser adaptada para qualquer sistema.

**Posso usar em projetos comerciais?**
Sim. Licença MIT.

**Como atualizo um squad?**
Substitua a pasta do squad pela versão nova. O `CHANGELOG.md` de cada squad documenta breaking changes.

**Qual a diferença disso pra uma biblioteca de prompts?**
Squads são sistemas completos — agentes com heurísticas de decisão, tasks executáveis com quality gates, templates, checklists e bases de conhecimento. Não só arquivos de texto com instruções.

**O que é Voice DNA?**
É como clonamos o estilo de comunicação de um especialista. Sentence starters, regras de vocabulário, anti-patterns — pra que agentes não só saibam *o que* dizer, mas *como* dizer do jeito que o especialista real diria.

<br/>

## Contribuindo

1. Fork este repositório
2. Crie seu squad seguindo os [standards](#crie-seu-próprio-squad)
3. Rode `*validate-squad {nome}` e garanta score ≥ 7.0
4. Abra um PR com: descrição do domínio, score de validação e pelo menos 1 exemplo de uso real

Veja [CONTRIBUTING.md](CONTRIBUTING.md) para o guia completo.

<br/>

## Roadmap

- ⚪ Squad marketplace — descubra e instale squads com um comando
- ⚪ Memória cross-squad — aprendizado persistente entre sessões
- ⚪ Compositor visual de squads — montagem drag-and-drop
- ⚪ Integrações enterprise — conectores Jira, Linear, Notion
- ⚪ Submissões da comunidade — contribuições curadas e peer-reviewed
- ⚪ Benchmarks de performance — meça qualidade de output dos agentes ao longo do tempo

<br/>

## Licença

MIT &copy; 2025 SynkraAI

<br/>

---

<p align="center">
  <sub>Open source sob MIT. Feito para quem quer times de especialistas, não agentes em branco.</sub>
</p>

<p align="center">
  <sub>Parte do ecossistema <a href="https://github.com/SynkraAI">SynkraAI</a>.</sub>
</p>
