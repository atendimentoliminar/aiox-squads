# Conversion Validation Checklist

**Version:** 1.0.0
**Used by:** converter-chief (*validate command)
**Purpose:** Validar que a app AIOS cobre 100% do fluxo n8n original

---

## 1. Node Coverage

Para CADA nó do JSON n8n original:

- [ ] Nó identificado na análise
- [ ] Pattern EIP atribuído
- [ ] Equivalente AIOS existe (task ou step dentro de task)
- [ ] Executor atribuído

**Veto condition:** Se qualquer nó não tem equivalente → FAIL

## 2. Connection Coverage

Para CADA conexão do JSON n8n:

- [ ] Source node tem equivalente AIOS
- [ ] Target node tem equivalente AIOS
- [ ] Fluxo de dados preservado (output do source alimenta input do target)

## 3. Trigger Coverage

- [ ] Trigger n8n identificado
- [ ] Entry point AIOS equivalente definido
- [ ] Frequência/modo preservado (webhook=HTTP, schedule=cron, etc.)

## 4. Condition Coverage

Para CADA IF/Switch no n8n:

- [ ] Condição traduzida corretamente
- [ ] Todos os branches cobertos
- [ ] Merge (se existir) preservado

## 5. Error Handling

- [ ] Tasks com side effects têm try/catch
- [ ] Retry policy definida para API calls
- [ ] Timeout definido
- [ ] Dead Letter Queue para falhas permanentes (se aplicável)

## 6. Security

- [ ] Zero credenciais hardcoded no código
- [ ] Credenciais mapeadas para env vars
- [ ] Credenciais do JSON n8n NÃO copiadas para a app

## 7. Structure Compliance

- [ ] config.yaml válido e completo
- [ ] Todas as tasks com 8 campos obrigatórios (HO-TP-001)
- [ ] Workflows com checkpoints (se existem)
- [ ] README.md documenta a app

## 8. Executor Optimization

- [ ] Worker-first principle aplicado
- [ ] Nenhum agent fazendo trabalho de worker
- [ ] Rationale documentado para cada executor
- [ ] Evolution paths documentados

---

## Scoring

| Seção | Peso | Status |
|-------|------|--------|
| Node Coverage | 30% | |
| Connection Coverage | 15% | |
| Trigger Coverage | 10% | |
| Condition Coverage | 15% | |
| Error Handling | 10% | |
| Security | 10% | |
| Structure Compliance | 5% | |
| Executor Optimization | 5% | |

**PASS:** Score >= 90%
**CONCERNS:** Score 70-89% (listar gaps)
**FAIL:** Score < 70% (requer retrabalho)

---

## Coverage Report Format

```
## Coverage Report: {app-name}

**Source:** {n8n-workflow-name} ({N} nós)
**Target:** {aios-app-name} ({M} tasks)

### Coverage: {X}%

### Node Mapping
| n8n Node | AIOS Equivalent | Status |
|----------|----------------|--------|
| {name} | {task} | ✅ / ❌ |

### Gaps (if any)
| n8n Node | Issue | Proposed Solution |
|----------|-------|-------------------|

### Score: {total}% — {PASS/CONCERNS/FAIL}
```
