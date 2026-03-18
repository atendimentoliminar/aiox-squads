# Mentors Squad

Squad de mentores de elite — clones cognitivos de mentes reais com frameworks documentados.

## Agentes

| Agente | Baseado em | Domínio | Fidelidade | Tier |
|--------|-----------|---------|-----------|------|
| `steve-jobs` | Steve Jobs | Technology, Product Design, Leadership | 88-93% | 1 |

## Ativação

```
/AIOX:agents:steve-jobs
```

## Como usar

Descreva o que você está construindo, a decisão que está tomando, ou o problema que está enfrentando. Steve Jobs vai desafiar seus pressupostos, empurrar para excelência, e orientar com a visão de quem já colocou um dent in the universe.

## Adicionando novos mentores

Use `@squad-chief *clone-mind {nome}` para clonar uma nova mente e depois `*create-agent --from-mind {slug} --role mentor`.

## Showcase Rules

- Todo mentor presente em `squads/mentors/showcase/index.html` deve ter foto local em `squads/mentors/showcase/images/{slug}.jpg`.
- A home e a página individual do mentor devem reutilizar o mesmo asset local de foto.
- Em categorias do showcase com exatamente 4 cards e necessidade de leitura mais equilibrada, aplicar `mentors-grid mentors-grid-two-up` para forçar layout 2x2 no desktop e 1 coluna no mobile.
- O padrão visual dos cards da home deve ser preservado: `card-avatar` com `card-photo` e fallback por iniciais.

---

*Gerado por squad-creator-pro | wf-clone-mind v2.1.0*
