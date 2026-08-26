# 💰 FinContas — Visão Geral do Projeto

> Plataforma web de **gestão financeira de gastos pessoais** para pessoa física comum.

---

## 1. O Problema

Muitas pessoas realizam **vários gastos ao longo do mês** (mercado, transporte, delivery, assinaturas, lazer, cartão de crédito) e, quando chega o fim do mês, se deparam com **uma conta alta para pagar sem saber com o que gastaram**.

A causa raiz é a **falta de registro e visibilidade**:

- Os gastos são feitos de forma fragmentada (dinheiro, PIX, cartão, boleto).
- Não existe um lugar único que centralize e **categorize** cada despesa.
- Sem categorização, não há como responder perguntas simples como *"quanto gastei com delivery esse mês?"*.
- A pessoa só percebe o excesso **depois** que o dinheiro já saiu, sem tempo de reagir.

## 2. A Solução

O **FinContas** é uma plataforma web onde o usuário **registra seus gastos** de forma rápida e os organiza por **categorias**. A partir desses lançamentos, a plataforma:

1. **Centraliza** todos os gastos em um único lugar.
2. **Categoriza** cada despesa (Alimentação, Transporte, Moradia, Lazer, etc.).
3. **Resume** o mês em um dashboard visual (total gasto, gasto por categoria, evolução).
4. **Alerta** o usuário quando ele se aproxima ou ultrapassa um **orçamento** definido por categoria.
5. **Ajuda a planejar** metas de economia e acompanhar o progresso.

O objetivo não é apenas registrar, mas **dar consciência financeira em tempo real**, permitindo que a pessoa **reaja antes** de estourar o orçamento.

## 3. Público-Alvo

- **Perfil:** Pessoa física comum (não é ferramenta contábil/empresarial).
- **Nível de conhecimento financeiro:** Básico a intermediário — a interface precisa ser simples e sem jargões.
- **Contexto de uso:** Web (desktop e mobile via navegador), com lançamentos rápidos no dia a dia.

## 4. Proposta de Valor

| Dor do usuário | Como o FinContas resolve |
|----------------|--------------------------|
| "Não sei com o que gastei" | Registro categorizado + relatórios por categoria |
| "Só descubro no fim do mês" | Dashboard e alertas em tempo real |
| "Gasto mais do que deveria" | Orçamentos por categoria com aviso ao se aproximar do limite |
| "Não consigo economizar" | Metas de economia com acompanhamento de progresso |
| "É trabalhoso anotar tudo" | Lançamento rápido, categorias pré-definidas e recorrências |

## 5. Escopo do Projeto (Alinhado à P1)

Este projeto foi pensado para atender integralmente ao roteiro da **Avaliação Parcial (P1)**, que exige:

- **Back-end (API Node.js):** API REST com rotas e regras de negócio essenciais (CRUD de gastos, categorias, orçamentos).
- **Documentação da API:** Especificação completa dos endpoints (Swagger/README/Postman).
- **Wireframes:** Protótipos das telas (Dashboard, Listagem, Cadastro/Edição, Detalhes).
- **Repositório GitHub + Release `v1.0.0-p1`:** Versionamento organizado, README e Release oficial.

> **Nota:** Nesta etapa (P1), o foco é a **API Node.js + documentação + wireframes**. O front-end completo (HTML/CSS/JS consumindo a API) é a evolução natural para a entrega final.

## 6. Entidades Centrais do Sistema

Estas são as "peças" que a API vai manipular (base para o CRUD da P1):

| Entidade | Descrição | Exemplos de campos |
|----------|-----------|--------------------|
| **Usuário** | Dono da conta financeira | id, nome, email, senha |
| **Gasto (Despesa)** | Cada lançamento de saída de dinheiro | id, descrição, valor, data, categoriaId, formaPagamento |
| **Categoria** | Agrupador de gastos | id, nome, cor, ícone |
| **Orçamento** | Limite planejado por categoria/mês | id, categoriaId, valorLimite, mês/ano |
| **Meta de Economia** | Objetivo de guardar dinheiro | id, nome, valorAlvo, valorAtual, prazo |

> A entidade **Gasto** é o coração do sistema e o principal alvo do CRUD (Create, Read, Update, Delete) exigido na P1.

## 7. Diferenciais (Escopo Futuro / Opcional)

Ideias que **não são obrigatórias** para a P1, mas mostram maturidade do projeto:

- 📊 Gráficos de evolução mensal e comparativo entre meses.
- 🔁 Gastos recorrentes (assinaturas, aluguel) lançados automaticamente.
- 💳 Registro de **receitas** para calcular saldo (entradas − saídas).
- 🔔 Notificações/alertas de orçamento estourado.
- 📤 Exportação de relatório em CSV/PDF.
- 🏷️ Categorias personalizadas pelo usuário.

## 8. Tecnologias Previstas

| Camada | Tecnologia |
|--------|-----------|
| Back-end / API | **Node.js** (Express) |
| Formato de dados | **JSON** (REST) |
| Persistência (P1) | Em memória / arquivo JSON ou banco simples |
| Front-end (final) | **HTML, CSS, JavaScript** |
| Documentação | **Swagger/OpenAPI** ou README + Postman |
| Versionamento | **Git / GitHub** (Release `v1.0.0-p1`) |
