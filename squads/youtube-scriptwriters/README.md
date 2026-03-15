# YouTube Scriptwriters Squad

Squad de roteiristas para YouTube baseado em **elite minds reais** com frameworks documentados.

## O que faz

Transforma temas de vídeo em roteiros completos e otimizados para retenção, usando metodologias reais de roteiristas profissionais de YouTube.

## Agents

| Agent | Tier | Especialidade | Ativacao |
|-------|------|---------------|----------|
| **Neville Medhora** | 0 (Diagnostico) | Diagnostico de copy — AIDA, Bob Avatar, Boring vs Casual | `/youtube-scriptwriters:neville-medhora` |
| **George Blackman** | 1 (Master) | Estrutura STP, Four Hats, hooks TTS, PCCE | `/youtube-scriptwriters:george-blackman` |
| **Dabi (David Liu)** | 1 (Master) | Storytelling, 21 Commandments, analise de retencao por gradientes | `/youtube-scriptwriters:dabi` |
| **Joba** | 1 (Master) | Roteiro Supremo, primeiros 30s, mini promessas, YouTube BR | `/youtube-scriptwriters:joba` |
| **Ali Abdaal** | 2 (Sistematizador) | HIVE Framework, scripts rapidos, 5 tipos de hook | `/youtube-scriptwriters:ali-abdaal` |
| **Script Director** | Orchestrator | Coordena o squad, roteia para o especialista certo | `/youtube-scriptwriters:yt-chief` |

## Quando usar cada agent

| Situacao | Agent |
|----------|-------|
| Nao sei o que esta errado no meu roteiro | **Neville Medhora** (diagnostico primeiro) |
| Preciso de um roteiro completo com estrutura profunda | **George Blackman** |
| Meu video precisa de storytelling e arco narrativo | **Dabi** |
| Quero otimizar para o publico brasileiro | **Joba** |
| Preciso de um roteiro rapido em bullet points | **Ali Abdaal** |
| Nao sei qual especialista usar | **Script Director** (yt-chief) |

## Workflow recomendado

```
1. Neville Medhora → Diagnostico (identifica o problema)
2. George Blackman → Estrutura (monta o mapa STP)
3. Dabi → Storytelling (enriquece com arco narrativo)
4. George Blackman → Escrita (roteiro completo)
5. Joba → Otimizacao BR (primeiros 30s + mini promessas)
```

Para workflow completo automatico, use o Script Director: `/youtube-scriptwriters:yt-chief` e o comando `*full-script`.

## Estrutura do Squad

```
squads/youtube-scriptwriters/
├── config.yaml              # Configuracao do squad
├── README.md                # Este arquivo
├── agents/
│   ├── yt-chief.md          # Orchestrator
│   ├── george-blackman.md   # Tier 1 — Estrutura STP
│   ├── dabi.md              # Tier 1 — Storytelling
│   ├── joba.md              # Tier 1 — YouTube BR
│   ├── ali-abdaal.md        # Tier 2 — HIVE rapido
│   └── neville-medhora.md   # Tier 0 — Diagnostico
├── tasks/
│   └── write-script.md      # Workflow guiado de escrita
├── templates/
│   └── script-template.md   # Template de output para roteiros
└── checklists/
    ├── script-review.md     # Review de roteiro (PCCE + retencao)
    └── copy-diagnosis.md    # Diagnostico de copy (AIDA + Bob)
```

## Instalacao

1. Copie a pasta `squads/youtube-scriptwriters/` para o seu projeto
2. Copie a pasta `.claude/commands/youtube-scriptwriters/` para `.claude/commands/` do seu projeto
3. Pronto — os agents estarao disponiveis como slash commands no Claude Code

### Arquivos necessarios

| Local | Conteudo | Obrigatorio |
|-------|----------|-------------|
| `squads/youtube-scriptwriters/` | Squad completo (agents, tasks, templates, checklists) | Sim |
| `.claude/commands/youtube-scriptwriters/` | Copias dos agents para ativacao via `/slash` | Sim |

## Frameworks por Agent

### Neville Medhora (Tier 0)
- AIDA for Video
- Before-After-Bridge (BAB)
- PAS (Problem-Agitate-Solution)
- Bob Avatar
- 70/30 Rule
- Boring vs Casual Diagnostic
- Kopywriting Checklist
- Headline Formula

### George Blackman (Tier 1)
- Setup-Tension-Payoff (STP)
- Four Hats Process (Artist → Architect → Writer → Wizard)
- Target-Transformation-Stakes (TTS) Hook
- 3 Levels of Scriptwriting
- PCCE Labeling (Progression/Conflict/Curiosity/Emotion)
- Link-CuriosityGap-Promise CTA

### Dabi (Tier 1)
- 21 Commandments of YouTube Storytelling
- Gradient Retention Analysis
- Hook Architecture (TTFE + Promise Signaling)
- Bumpy Ramp to Climax (Story Arc Engineering)

### Joba (Tier 1)
- Roteiro Supremo (4 blocos)
- First 30 Seconds Framework
- Mini Promessas (5 tipos de retention hooks)
- 3 Pilares de Conexao
- Snowball SEO Strategy

### Ali Abdaal (Tier 2)
- HIVE(S) Framework (Hook-Intro-Value-End Screen)
- 4 Value Structures (Listicle/Triplet/Quartet/Story)
- Title+Thumbnail First
- 5 Hook Types
- Slow Burn Writing Strategy
- 3 Video Types (Discoverable/Community/Sales)

## Comandos rapidos por agent

| Agent | Comandos principais |
|-------|-------------------|
| Neville | `*diagnose` `*aida` `*hook-copy` `*bob` `*checklist` `*rewrite` |
| George | `*write-script` `*hook` `*structure` `*review` `*cta` |
| Dabi | `*storytelling` `*retention-analysis` `*hook-analysis` `*story-arc` `*commandments` |
| Joba | `*roteiro` `*gancho` `*retencao` `*analise` `*seo` |
| Ali | `*hive` `*hook` `*value` `*quick-script` `*video-type` |
| Director | `*full-script` `*diagnose` `*structure` `*storytelling` `*roteiro-br` `*quick` `*compare` |
