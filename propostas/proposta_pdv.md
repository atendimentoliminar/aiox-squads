PROPOSTA COMERCIAL
Desenvolvimento de Aplicativo Web PWA para Gestão Comercial e Força de Vendas
ON AI Solutions + PDV

Data: 16 de março de 2026
Proponente: ON AI Solutions
Cliente: PDV

1. Visão Geral

A ON AI Solutions apresenta esta proposta para o desenvolvimento de uma plataforma comercial moderna, no padrão PWA (Progressive Web App), projetada para tornar a operação de vendas da PDV mais ágil, inteligente e integrada.

A solução proposta foi pensada para atender toda a jornada comercial do vendedor, desde o cadastro e consulta de clientes até a criação de pedidos, aplicação automática das melhores condições de preço, análise de crédito, cálculo tributário e integração com os ERPs da operação.

Mais do que um sistema de pedidos, estamos propondo uma plataforma de produtividade comercial, preparada para elevar o nível de controle, velocidade e consistência do processo de vendas.

2. Objetivo da Solução

Desenvolver uma aplicação web responsiva, instalável e de uso simples, capaz de apoiar a equipe comercial da PDV com eficiência operacional e inteligência de negócio, permitindo:

cadastro rápido e padronizado de clientes;

consulta comercial com acesso facilitado ao histórico e dados relevantes;

criação e gestão de pedidos com regras comerciais avançadas;

cálculo automático de preços, descontos e tributos;

verificação de crédito e pendências financeiras;

integração com ERP Dunamis e ERP Popwork;

acompanhamento da performance de vendas por meio de dashboards.

3. Desafio de Negócio

O processo comercial descrito pela PDV exige uma solução que una três pilares críticos:

1. Velocidade comercial

O vendedor precisa ter autonomia para consultar clientes, montar pedidos e tomar decisões com agilidade, sem depender de processos paralelos ou retrabalho.

2. Inteligência de precificação

O sistema precisa considerar preço base, promoções, tabelas vinculadas ao cliente, quantidade comprada e regras específicas para encontrar automaticamente a melhor condição de venda.

3. Confiabilidade operacional

Além da experiência comercial, a plataforma deve garantir aderência fiscal, análise de crédito, visão de pendências e integração segura com os sistemas de retaguarda.

É exatamente nesse ponto que a ON AI Solutions atua: conectando tecnologia, processo e regra de negócio em uma solução robusta, prática e escalável.

4. Escopo da Proposta
4.1. Autenticação e Acesso

Desenvolvimento da estrutura de entrada do sistema com autenticação segura de usuários.

Entregas

tela de login;

autenticação de acesso;

controle de sessão;

estrutura inicial para permissões e rastreabilidade.

4.2. Cadastro de Clientes

Tela de cadastro comercial para pessoas físicas e jurídicas, com foco em produtividade e confiabilidade dos dados.

Funcionalidades previstas

cadastro de clientes PF e PJ;

formulário comercial padronizado;

preenchimento automático de dados de pessoa jurídica via consulta de CNPJ na Receita Federal;

validações de consistência;

armazenamento estruturado para uso nas demais rotinas do sistema.

Ganho para a operação

redução de tempo de cadastro;

menor incidência de erros manuais;

padronização da base comercial.

4.3. Consulta de Clientes

Tela de pesquisa de clientes por nome/descrição e CNPJ.

Informações exibidas

nome;

endereço;

cidade;

telefone.

Recursos

ordenação alfabética;

busca rápida;

atalho direto para a funcionalidade Criar Pedido.

4.4. Criação de Pedido

Este será o módulo central da aplicação, reunindo regras comerciais, cálculo automático e apoio à decisão de venda.

Funcionalidades previstas

inclusão de itens no pedido;

pesquisa e seleção de produtos;

preenchimento automático de preço de tabela;

digitação de quantidade, unidade, valor e desconto;

cálculo automático do valor total do item;

cálculo de percentual de desconto quando houver alteração no preço;

cálculo automático do valor de venda quando o desconto for informado;

gravação, edição e exclusão de itens;

composição da lista de itens do pedido;

cálculo do total geral da venda;

campo de observações.

Informações por item

código do item;

descrição;

quantidade;

unidade de venda;

valor unitário;

desconto;

valor total.

4.5. Inteligência de Preço e Tabelas Promocionais

A aplicação deverá considerar as regras comerciais da PDV para garantir que o sistema identifique automaticamente a melhor condição possível para o cliente.

Regras contempladas

preço base vindo do cadastro de produtos/KARDEX no campo valorvenda;

vínculo de clientes com uma ou mais tabelas promocionais;

promoções por valor mínimo do pedido;

promoções por quantidade comprada;

comparação entre múltiplas regras válidas;

escolha automática do melhor preço aplicável no momento da venda.

Exemplo prático

Se um cliente possuir mais de uma condição promocional ativa, o sistema analisará os critérios do pedido e aplicará a condição mais vantajosa conforme a regra vigente.

4.6. Consulta de Produtos

A solução disponibilizará consulta de produtos em formato de lista, com foco em apoio comercial.

Itens exibidos

foto do produto;

descrição;

preços aplicáveis conforme as tabelas disponíveis.

Esse recurso facilita a navegação do vendedor e melhora a experiência de montagem do pedido.

4.7. Crédito, Pendências e Histórico Comercial

Para apoiar decisões comerciais mais seguras, o sistema também contemplará informações financeiras e de relacionamento com o cliente.

Funcionalidades previstas

verificação de limite de crédito disponível em vendas a prazo;

visualização de créditos existentes do cliente;

sugestão de uso desses créditos como abatimento da compra;

registro dessa decisão no campo de observação do pedido;

consulta de pendências financeiras;

consulta de produtos comprados por período;

totalização dos itens comprados;

ranking dos produtos mais comprados para os menos comprados;

cálculo do valor médio de venda por item.

4.8. Cálculo Tributário

Cada item do pedido deverá calcular os tributos conforme parâmetros do produto, operação, cliente e UF.

Tributos contemplados

ICMS;

IBS;

CBS;

PIS;

COFINS;

IPI;

substituição tributária.

Observação estratégica

Este é um dos módulos mais sensíveis do projeto, por envolver legislação federal e estadual, além de regras específicas por operação. Por isso, sua implementação dependerá de alinhamento técnico e validação fiscal junto ao time da PDV.

4.9. Integração com ERP

Ao confirmar o pedido, a aplicação deverá permitir o envio para os sistemas de retaguarda da empresa.

Integrações previstas

ERP Dunamis

ERP Popwork

Recursos adicionais

tela de configuração para definição do ERP ativo;

envio do pedido por e-mail;

sincronização de pedidos conforme status e regra operacional.

4.10. Gestão de Pedidos

Tela para acompanhamento dos pedidos realizados pelo usuário.

Filtros previstos

orçamentos;

pedidos pendentes de faturamento;

pedidos faturados.

Dados exibidos

data de emissão;

número do pedido;

nome do cliente;

valor total;

status.

Regras de edição

pedidos em orçamento poderão ser editados;

pedidos em aberto ainda não sincronizados também poderão ser alterados;

o sistema poderá sincronizar pedidos ainda em status de orçamento, conforme regra definida.

4.11. Dashboard Comercial

Na abertura da aplicação, o vendedor terá acesso a um painel resumido da sua operação.

Indicadores previstos

gráfico com posição totalizada de vendas;

comparativo entre vendas realizadas e meta;

ranking de vendas por cliente;

ranking de vendas por grupo e subgrupo de produtos.

Benefício

Esse painel transforma a aplicação em uma ferramenta não apenas operacional, mas também gerencial, permitindo leitura rápida da performance comercial.

5. Arquitetura Tecnológica

A proposta considera a seguinte base tecnológica:

Front-end

React na versão mais atual;

arquitetura PWA;

interface responsiva;

uso em desktop, tablet e celular.

Back-end

C#;

consumo de APIs do servidor da empresa;

estrutura preparada para regras de negócio, integrações e evolução futura.

Bancos e sistemas

SQL Server para integração com ERP Dunamis;

MySQL para integração com ERP Popwork.

6. Estratégia de Implantação

Pela abrangência e criticidade da operação, recomendamos a execução por fases, para garantir previsibilidade, validação contínua e menor risco de retrabalho.

Fase 1 — Descoberta e Arquitetura

refinamento funcional;

mapeamento das integrações;

definição técnica da arquitetura;

validação das premissas do projeto.

Fase 2 — Base Operacional

login;

cadastro de clientes;

consulta de clientes;

estrutura base do pedido.

Fase 3 — Motor Comercial

inclusão e gestão de itens;

cálculo de descontos;

regras promocionais;

crédito, pendências e histórico comercial.

Fase 4 — Fiscal e Integrações

cálculo de tributos;

integração com ERP Dunamis;

integração com ERP Popwork;

envio por e-mail;

parametrizações.

Fase 5 — Dashboards e Homologação

indicadores visuais;

validações finais;

homologação;

preparação para entrada em produção.

7. Prazo Estimado

O prazo estimado para execução completa do projeto é de 16 a 22 semanas, considerando:

disponibilidade das APIs e acessos;

clareza e validação das regras fiscais;

suporte do cliente durante homologação;

estabilidade dos ambientes de integração.

8. Investimento

Considerando a complexidade funcional, as integrações previstas, o volume de regras de negócio e a necessidade de confiabilidade operacional, apresentamos a seguinte condição comercial:

Projeto Completo

Valor total: R$ 168.000,00

Sugestão de distribuição

Entrada / Kickoff: R$ 67.200,00

Marco intermediário de desenvolvimento: R$ 50.400,00

Entrega final / homologação: R$ 50.400,00

Forma sugerida

40% na aprovação da proposta;

30% na conclusão da fase principal de desenvolvimento;

30% na homologação final.

9. Opção de Entrada com MVP

Caso a PDV prefira iniciar com menor investimento e acelerar validação de mercado interno, podemos estruturar uma primeira entrega com foco no núcleo comercial.

Escopo do MVP

login;

cadastro e consulta de clientes;

criação de pedidos;

regras comerciais básicas;

lista de pedidos;

dashboard inicial;

integração inicial com um ERP.

Investimento estimado do MVP

R$ 89.000,00

Essa abordagem permite entrada mais rápida, com evolução posterior dos módulos fiscais, promocionais avançados e segunda integração ERP.

10. Premissas do Projeto

Esta proposta considera que:

a PDV fornecerá documentação e acesso às APIs;

haverá uma referência interna para validação funcional;

regras fiscais e tributárias serão homologadas pelo time responsável do cliente;

integrações dependerão da disponibilidade técnica dos sistemas envolvidos;

mudanças relevantes de escopo após aprovação poderão demandar reorçamento.

11. Itens Não Contemplados Nesta Etapa

Salvo contratação complementar, não estão incluídos:

emissão de nota fiscal;

módulo financeiro completo;

conciliação de recebíveis;

app mobile nativo;

operação full offline;

relatórios executivos adicionais além dos dashboards previstos;

customizações extraordinárias fora do escopo apresentado.

12. Diferenciais da ON AI Solutions

A ON AI Solutions combina visão de negócio com capacidade técnica de implementação.

Nosso diferencial está em transformar regras operacionais complexas em soluções utilizáveis, escaláveis e alinhadas à realidade da empresa.

Entregamos:

leitura estratégica do processo comercial;

estrutura tecnológica moderna;

integração entre vendas, operação e retaguarda;

foco em usabilidade e produtividade;

implantação com visão prática e evolutiva.

Não desenvolvemos apenas telas. Desenvolvemos uma base digital para melhorar o fluxo comercial da empresa.

13. Encerramento

Acreditamos que esta solução representa uma oportunidade concreta para a PDV modernizar sua operação comercial, reduzir fricções no processo de venda, ampliar a inteligência de precificação e integrar melhor sua jornada entre campo, gestão e ERP.

A ON AI Solutions se coloca à disposição para conduzir este projeto com seriedade, visão estratégica e compromisso com resultado.

Atenciosamente,
ON AI Solutions