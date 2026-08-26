# 🧩 FinContas — Funcionalidades

Este documento detalha as funcionalidades do sistema, separadas em **Essenciais (MVP / obrigatórias para a P1)** e **Complementares (evolução futura)**.

---

## 🎯 Legenda de Prioridade

| Símbolo | Significado |
|---------|-------------|
| 🟢 | **Essencial (MVP)** — necessário para a entrega da P1 |
| 🟡 | **Desejável** — agrega valor, recomendado se houver tempo |
| 🔵 | **Futuro** — escopo da entrega final / pós-P1 |

---

## 1. Gestão de Gastos (núcleo do sistema) 🟢

O coração da plataforma — onde o usuário registra suas saídas de dinheiro.

- **F1.1** Cadastrar um novo gasto (descrição, valor, data, categoria, forma de pagamento).
- **F1.2** Listar todos os gastos do usuário.
- **F1.3** Filtrar gastos por período (mês/ano) e por categoria.
- **F1.4** Visualizar detalhes de um gasto específico.
- **F1.5** Editar um gasto existente.
- **F1.6** Excluir um gasto.

> 💡 Estas 6 funcionalidades já cobrem o **CRUD completo** exigido pela P1 (GET, POST, PUT/PATCH, DELETE).

## 2. Gestão de Categorias 🟢

Permite organizar e agrupar os gastos.

- **F2.1** Listar categorias disponíveis (pré-cadastradas: Alimentação, Transporte, Moradia, Lazer, Saúde, Educação, Outros).
- **F2.2** Criar categoria personalizada (nome, cor, ícone). 🟡
- **F2.3** Editar categoria. 🟡
- **F2.4** Excluir categoria (apenas se não houver gastos vinculados). 🟡

## 3. Dashboard e Relatórios 🟢

Transforma os lançamentos em informação útil — resolve o "não sei com o que gastei".

- **F3.1** Exibir **total gasto no mês** atual.
- **F3.2** Exibir **gasto por categoria** (quanto foi para cada grupo).
- **F3.3** Listar os **maiores gastos** do mês.
- **F3.4** Comparar gasto do mês atual com o mês anterior. 🟡
- **F3.5** Gráfico de pizza (distribuição por categoria) e de barras (evolução mensal). 🔵

## 4. Orçamentos por Categoria 🟡

Ajuda o usuário a **não estourar** os limites — resolve o "gasto mais do que deveria".

- **F4.1** Definir um limite de orçamento mensal por categoria.
- **F4.2** Acompanhar quanto do orçamento já foi consumido (ex.: "80% do orçamento de Lazer").
- **F4.3** Alertar quando o gasto se aproximar (ex.: 80%) ou ultrapassar o limite. 🔵

## 5. Metas de Economia 🔵

Incentiva o planejamento e a poupança.

- **F5.1** Criar uma meta de economia (nome, valor-alvo, prazo).
- **F5.2** Registrar aportes e acompanhar o progresso (% concluído).
- **F5.3** Visualizar quanto falta e o ritmo necessário para bater a meta.

## 6. Gestão de Receitas (Saldo) 🔵

Complementa a visão: entradas − saídas = saldo real.

- **F6.1** Registrar receitas (salário, freelance, etc.).
- **F6.2** Calcular o **saldo do mês** (receitas − gastos).

## 7. Autenticação e Usuário 🟡

- **F7.1** Cadastro de usuário (nome, email, senha).
- **F7.2** Login/autenticação.
- **F7.3** Cada usuário vê **apenas os próprios** gastos.

> Para a P1 é aceitável simplificar (ex.: um usuário fixo ou autenticação básica), focando o esforço no CRUD de gastos.
Não crie regras de autenticação agora pois talvez irá dar um trabalho quando for utilizar o Postman

## 8. Extras (Escopo Futuro) 🔵

- **F8.1** Gastos recorrentes (assinaturas, aluguel) lançados automaticamente.
- **F8.2** Exportar relatório em CSV/PDF.
- **F8.3** Notificações por e-mail no fechamento do mês.
- **F8.4** Tags/etiquetas além da categoria.

---

## 📌 Resumo — O que entra na P1

| Módulo | Funcionalidades | Prioridade |
|--------|-----------------|------------|
| Gastos (CRUD) | F1.1 a F1.6 | 🟢 Obrigatório |
| Categorias | F2.1 (mínimo) | 🟢 Obrigatório |
| Dashboard | F3.1 a F3.3 | 🟢 Recomendado |
| Orçamentos | F4.1, F4.2 | 🟡 Desejável |
| Autenticação | F7.1 a F7.3 | 🟡 Simplificado |
| Metas / Receitas / Extras | F5, F6, F8 | 🔵 Futuro |

> **Estratégia sugerida:** garanta 100% do módulo de **Gastos (CRUD)** + **Categorias** + **Dashboard básico** para pontuar forte na API e nos wireframes. Os demais módulos entram conforme o tempo.
