# LLM Model Routing Rules

> Automatically loaded in every Claude Code session. Guides model selection for cost optimization.

## Routing Matrix by Agent

| Agent | Tier | Default Model | Subagent Model | Justification |
|-------|------|---------------|----------------|---------------|
| @architect | TIER-3 (Premium) | opus | opus | Architecture decisions need strongest reasoning |
| @aios-master | TIER-3 (Premium) | opus | opus | Cross-agent orchestration, framework development |
| @dev | TIER-2 (Standard) | sonnet | sonnet | Daily implementation, 77.2% SWE-bench is sufficient |
| @qa | TIER-2 (Standard) | sonnet | sonnet | Code review and test analysis need good reasoning |
| @pm | TIER-2 (Standard) | sonnet | sonnet | PRDs and strategy need quality writing |
| @analyst | TIER-2 (Standard) | sonnet | sonnet | Research and analysis need solid reasoning |
| @data-engineer | TIER-2 (Standard) | sonnet | sonnet | Schema design and migrations |
| @po | TIER-1 (Economy) | haiku | haiku | Structured work, template-driven |
| @sm | TIER-1 (Economy) | haiku | haiku | Sprint planning, story creation from templates |
| @ux-design-expert | TIER-1 (Economy) | haiku | haiku | UI specs, design tokens, scaffolding |
| @devops | TIER-1 (Economy) | haiku | haiku | Git ops, CI/CD, scripted operations |

## Cost Reference (per 1M tokens)

| Model | Input | Output | Speed | Context | Output Max |
|-------|-------|--------|-------|---------|------------|
| Opus 4.6 | $5.00 / R$29 | $25.00 / R$145 | 1x | 1M (beta) | 128K |
| Sonnet 4.5 | $3.00 / R$17 | $15.00 / R$87 | ~2x | 200K | 64K |
| Haiku 4.5 | $0.80 / R$5 | $4.00 / R$23 | ~4-5x | 200K | 64K |

## Task-Based Overrides (prevail over agent tier)

### Escalate to Opus

Regardless of agent tier, escalate to Opus when:
- Refactoring 6+ files across multiple modules
- Security audit or vulnerability analysis
- Complex debugging with unknown root cause
- Novel problems without precedent in the codebase
- Context exceeds 100K tokens
- Cross-module architectural decisions
- Multi-domain analysis requiring deep reasoning

### Downgrade to Haiku

Regardless of agent tier, downgrade to Haiku when:
- Reading or exploring files (no modification)
- Simple edits: typos, config values, renames
- Git operations: status, diff, log, branch
- Template-based generation: story scaffolding, doc boilerplate
- Bug fix with known location and known solution
- Checklist execution and report formatting
- Listing/searching files and code

## Complexity Heuristics

| Level | Indicators | Model |
|-------|-----------|-------|
| SIMPLE | Prompt < 100 words, 1 file, keywords: "fix", "typo", "rename", "list", "read", "show" | haiku |
| MEDIUM | 2-5 files, keywords: "implement", "create", "build", "test", "review", "refactor" | sonnet |
| COMPLEX | 6+ files, keywords: "architect", "redesign", "migrate", "security", "optimize", "debug unknown" | opus |

## Behavior Rules

### For Subagents (Task tool)

When spawning subagents via the `Task` tool, ALWAYS set the `model` parameter:

```
- Explore agents: model "haiku" (file reading, codebase search)
- Plan agents: model "sonnet" (implementation planning)
- Bash agents: model "haiku" (command execution)
- General-purpose agents: use agent tier from matrix above
```

### For Main Session

- If running on Opus but task is SIMPLE: suggest `/model sonnet` or `/model haiku` (max 1 suggestion per turn)
- If running on Haiku but task is COMPLEX: suggest `/model opus`
- NEVER switch model automatically -- only suggest
- Honor explicit user model preference without further suggestions
- After suggesting once for a task category, do not repeat for same category

### Known Limitation

The `model` parameter in the Task tool may occasionally fail with 404 for short model names (GitHub #18873). If this occurs:
- Omit the `model` parameter (subagent inherits session model)
- Routing rules still guide `/model` suggestions for the main session
