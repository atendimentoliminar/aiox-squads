# CONTRATO DE DESENVOLVIMENTO DE SOFTWARE
**Ecossistema Digital de Vendas — App do Vendedor + Portal B2B**

**Contrato nº:** [Número]
**Data:** ___/___/2026

---

## PARTES

**CONTRATADA:**
Fabiano Silva / ON AI Solutions
[CNPJ ou CPF]
[Endereço]
[E-mail] | [WhatsApp]

**CONTRATANTE:**
PDV — [Razão Social Completa]
[CNPJ]
[Endereço]
[E-mail] | [WhatsApp]
**Representante:** Paulo [Sobrenome]

---

## 1. OBJETO

Desenvolvimento de dois sistemas integrados:

### Sistema 1 — App do Vendedor

| Funcionalidade | Descrição |
|----------------|-----------|
| Busca de clientes | Por nome ou CNPJ, com histórico de compras, pendências financeiras e limite de crédito disponível |
| Precificação automática | Tabelas promocionais por cliente aplicadas automaticamente na montagem do pedido |
| Integração com ERP | Envio de pedido direto para Dunamis ou Popwork, sem redigitação |
| Dashboard do vendedor | Posição de vendas, comparativo de meta e ranking de clientes |
| Carteira FLEX | Crédito de desconto acumulado pelo vendedor, utilizável conforme políticas definidas pela PDV |

### Sistema 2 — Portal B2B

| Funcionalidade | Descrição |
|----------------|-----------|
| Acesso do cliente | Login por CNPJ com catálogo completo e busca por código de barras, nome ou código interno |
| Entrada de pedido | Digitação manual, upload de ordem de compra ou lista via WhatsApp |
| Disparo de promoções | Envio automático via WhatsApp com arte gerada por IA, sem intervenção manual |
| Gamificação e cashback | Programa de fidelidade por volume e frequência de compra |
| Dashboards e IA | KPIs em tempo real (volume por cliente, produtos mais pedidos, ticket médio, frequência) com geração de insights por IA |
| Notificações de pedido | Status de entrega enviado automaticamente ao cliente via WhatsApp |

### Integração

- Integração com APIs dos ERPs Dunamis e/ou Popwork mediante documentação fornecida pela PDV
- Os dois sistemas compartilham a mesma base de dados e regras comerciais

---

## 2. O QUE NÃO ESTÁ INCLUÍDO

Os itens abaixo estão fora do escopo deste contrato. Qualquer um deles exige **Change Order assinado** antes de ser iniciado:

- Instalação, configuração ou manutenção de servidores (local ou em nuvem)
- Integrações com ERPs além de Dunamis e Popwork
- Desenvolvimento de identidade visual (marca, logo, materiais)
- Treinamento da equipe da PDV
- Suporte ao usuário final dos clientes da PDV
- Emissão de nota fiscal, módulo financeiro ou contábil
- Integrações com marketplaces externos
- Qualquer funcionalidade não listada no item 1

---

## 3. PREMISSAS E OBRIGAÇÕES DA PDV

O Contratante se compromete a:

1. Fornecer acesso e documentação completa das APIs dos ERPs (Dunamis / Popwork) em até **10 dias úteis após a assinatura**
2. Designar **um único ponto de contato** com autoridade para validar regras comerciais e aprovar entregas
3. Responder solicitações de aprovação em até **3 dias úteis** — sem resposta nesse prazo, a entrega é considerada aprovada
4. Garantir infraestrutura de servidor (local ou em nuvem) com os requisitos técnicos fornecidos pelo Contratado antes do início da implantação
5. Participar das sessões de validação de regras operacionais agendadas pelo Contratado

> **Atraso da PDV no cumprimento dessas obrigações estende proporcionalmente os prazos do Contratado, sem penalidade.**

---

## 4. ENTREGAS E CRONOGRAMA

**Prazo total:** 45 a 60 dias úteis a partir do **kickoff**

O kickoff ocorre após:
- Assinatura deste contrato
- Recebimento da entrada (40%)
- Recebimento da documentação das APIs

| Marco | Entrega | Pagamento vinculado |
|-------|---------|---------------------|
| Kickoff | Alinhamento de requisitos e arquitetura aprovada | — |
| M1 — Entrega intermediária | Sistema 1 funcional (App do Vendedor) com integração ERP ativa | 30% |
| M2 — Homologação final | Sistema 2 funcional (Portal B2B) + integração completa + testes | 30% |

---

## 5. REVISÕES

Cada marco inclui **2 rodadas de revisão** para ajustes de comportamento e interface.

Rodada adicional além das 2 incluídas: **Change Order obrigatório antes de qualquer trabalho ser feito.**

Mudanças relevantes de escopo após aprovação do kickoff são tratadas como aditivo contratual, com novo orçamento e prazo acordados por escrito.

---

## 6. VALOR E CONDIÇÕES DE PAGAMENTO

**Valor total: R$ 28.500,00**

| Parcela | % | Valor | Vencimento |
|---------|---|-------|------------|
| Entrada | 40% | R$ 11.400,00 | Na assinatura deste contrato |
| Entrega intermediária (M1) | 30% | R$ 8.550,00 | Na aprovação do Marco 1 |
| Homologação final (M2) | 30% | R$ 8.550,00 | Na aprovação do Marco 2 |

> **Nenhum trabalho é iniciado antes do recebimento da entrada.**

Atraso no pagamento superior a **5 dias úteis** suspende automaticamente o desenvolvimento, com prazo estendido proporcionalmente, sem penalidade ao Contratado.

Juros de 1% ao mês sobre o valor em atraso, a partir do 6º dia.

Pagamento via PIX/TED:
[Dados bancários]

---

## 7. MANUTENÇÃO MENSAL

Após a aprovação da homologação final (M2):

| Item | Condição |
|------|----------|
| Valor | R$ 250,00/hora × 5 horas = **R$ 1.250,00/mês** |
| Isenção | 6 meses a partir da data de aprovação do M2 |
| Início da cobrança | 7º mês após aprovação do M2 |
| Escopo | Correções de bugs, ajustes de comportamento, melhorias incrementais |
| Rollover | Horas não utilizadas rollover para o mês seguinte (limite: 1 mês) |
| Horas excedentes | Cobradas proporcionalmente (R$ 250,00/hora) mediante aprovação prévia |
| Vigência | Renovação automática mensal com aviso de 30 dias para cancelamento por qualquer parte |

---

## 8. PROPRIEDADE INTELECTUAL

Todo o código-fonte, banco de dados, interfaces, prompts de IA, fluxos e documentação técnica produzidos neste contrato são de propriedade da **PDV** com a seguinte condição:

> **A transferência de propriedade intelectual ocorre exclusivamente após a quitação integral do contrato (aprovação e pagamento do M2).**

Até o pagamento final, o Contratado concede à PDV licença limitada, não exclusiva e revogável para uso em ambiente de homologação e produção.

O Contratado reserva-se o direito de citar o projeto como referência comercial, sem divulgar dados confidenciais da PDV.

---

## 9. CONFIDENCIALIDADE

Ambas as partes comprometem-se a não divulgar a terceiros informações obtidas no decorrer do projeto, incluindo: dados de clientes, estratégias comerciais, estrutura de APIs, regras de precificação e base de dados.

Vigência: **2 anos após o encerramento do contrato.**

---

## 10. CANCELAMENTO (KILL FEE)

Se a PDV cancelar o projeto após o início:

| Momento do cancelamento | Obrigação financeira da PDV |
|------------------------|------------------------------|
| Após assinatura, antes do kickoff | Entrada (R$ 11.400,00) não é reembolsada |
| Após kickoff, antes da entrega do M1 | Valor pago + 25% do valor restante |
| Após aprovação do M1 | Valor pago + 15% do valor restante |

O kill fee reconhece que o Contratado alocou capacidade, recusou outros projetos e está no meio de um trabalho.

---

## 11. LIMITAÇÃO DE RESPONSABILIDADE

O Contratado não se responsabiliza por:

- Falhas de infraestrutura de servidor não gerenciada pelo Contratado
- Interrupções nas APIs dos ERPs (Dunamis / Popwork)
- Perda de dados por falha de servidor da PDV
- Indisponibilidade de serviços de terceiros (WhatsApp Business API, serviços de IA)
- Danos indiretos decorrentes de indisponibilidade do sistema

---

## 12. VIGÊNCIA E RESCISÃO

Este contrato entra em vigor na data de assinatura e se encerra com a aprovação da homologação final (M2) e quitação integral.

O contrato de manutenção (item 7) tem vigência independente, iniciando 7 meses após a aprovação do M2.

---

## 13. FORO

Fica eleito o foro da comarca de **[Cidade/Estado]** para dirimir quaisquer controvérsias oriundas deste contrato, com renúncia a qualquer outro, por mais privilegiado que seja.

---

## ASSINATURAS

**Contratado:**
Fabiano Silva / ON AI Solutions
Data: ___/___/2026
Assinatura: _______________________

**Contratante:**
[Nome completo de Paulo]
Cargo: _______________________
PDV — [Razão Social]
Data: ___/___/2026
Assinatura: _______________________

---

*Gerado em: 2026-03-18*
*Proposta de referência: Ecossistema Digital de Vendas ON + PDV — 16/03/2026*
*Reunião de aprovação: 18/03/2026*
