# 📋 FinContas — Casos de Uso

Este documento descreve os principais **casos de uso** do sistema, incluindo atores, fluxos e o mapeamento com os endpoints da API (útil para a documentação e os wireframes da P1).

---

## 👤 Atores

| Ator | Descrição |
|------|-----------|
| **Usuário** | Pessoa física que registra e acompanha seus gastos. Ator principal de quase todos os casos de uso. |
| **Sistema** | O próprio FinContas, que processa, calcula totais e emite alertas. |

---

## 🗺️ Diagrama de Casos de Uso (textual)

```
                         ┌─────────────────────────────┐
                         │          FinContas          │
                         │                             │
   ┌─────────┐           │  (UC01) Registrar Gasto     │
   │         │──────────▶│  (UC02) Consultar Gastos    │
   │ Usuário │           │  (UC03) Editar Gasto        │
   │         │──────────▶│  (UC04) Excluir Gasto       │
   └─────────┘           │  (UC05) Gerenciar Categorias│
        │                │  (UC06) Ver Dashboard       │
        │───────────────▶│  (UC07) Definir Orçamento   │
        │                │  (UC08) Criar Meta          │
        │                │  (UC09) Autenticar          │
                         └─────────────────────────────┘
```

---

## UC01 — Registrar Gasto 🟢

- **Ator:** Usuário
- **Objetivo:** Lançar uma nova despesa no sistema.
- **Pré-condição:** Usuário autenticado (ou sessão ativa).
- **Fluxo Principal:**
  1. O usuário acessa a tela "Novo Gasto".
  2. Informa **descrição**, **valor**, **data**, **categoria** e **forma de pagamento**.
  3. Confirma o cadastro.
  4. O sistema valida os dados e salva o gasto.
  5. O sistema atualiza os totais do mês e retorna confirmação.
- **Fluxo Alternativo (dados inválidos):**
  - Se o valor for vazio ou negativo, o sistema exibe erro e não salva (`400 Bad Request`).
- **Pós-condição:** Gasto registrado e visível na listagem.
- **Endpoint:** `POST /gastos`

## UC02 — Consultar Gastos 🟢

- **Ator:** Usuário
- **Objetivo:** Visualizar e filtrar seus gastos.
- **Fluxo Principal:**
  1. O usuário acessa a tela de "Listagem de Gastos".
  2. (Opcional) Aplica filtros por **mês/ano** ou **categoria**.
  3. O sistema retorna a lista de gastos correspondente.
  4. O usuário pode clicar em um item para ver os **detalhes**.
- **Fluxo Alternativo (nenhum gasto):**
  - O sistema exibe mensagem "Nenhum gasto encontrado para este período".
- **Endpoints:**
  - `GET /gastos` (lista todos)
  - `GET /gastos?mes=08&ano=2026&categoriaId=2` (com filtros)
  - `GET /gastos/:id` (detalhes de um gasto)

## UC03 — Editar Gasto 🟢

- **Ator:** Usuário
- **Objetivo:** Corrigir informações de um gasto já lançado.
- **Fluxo Principal:**
  1. O usuário seleciona um gasto na listagem.
  2. Clica em "Editar".
  3. Altera os campos desejados.
  4. Confirma a alteração.
  5. O sistema valida, salva e recalcula os totais.
- **Fluxo Alternativo (gasto inexistente):**
  - O sistema retorna `404 Not Found`.
- **Endpoint:** `PUT /gastos/:id` ou `PATCH /gastos/:id`

## UC04 — Excluir Gasto 🟢

- **Ator:** Usuário
- **Objetivo:** Remover um gasto registrado por engano ou desnecessário.
- **Fluxo Principal:**
  1. O usuário seleciona um gasto.
  2. Clica em "Excluir" e confirma.
  3. O sistema remove o gasto e atualiza os totais.
- **Fluxo Alternativo (gasto inexistente):**
  - O sistema retorna `404 Not Found`.
- **Endpoint:** `DELETE /gastos/:id`

## UC05 — Gerenciar Categorias 🟡

- **Ator:** Usuário
- **Objetivo:** Consultar, criar, editar ou excluir categorias.
- **Fluxo Principal:**
  1. O usuário acessa "Categorias".
  2. Visualiza a lista de categorias.
  3. Pode criar uma nova (nome, cor, ícone), editar ou excluir.
- **Regra de Negócio:** Não é possível excluir uma categoria que possua gastos vinculados.
- **Endpoints:**
  - `GET /categorias`
  - `POST /categorias`
  - `PUT /categorias/:id`
  - `DELETE /categorias/:id`

## UC06 — Visualizar Dashboard 🟢

- **Ator:** Usuário
- **Objetivo:** Entender rapidamente com o que gastou no mês.
- **Fluxo Principal:**
  1. O usuário acessa a tela inicial (Dashboard).
  2. O sistema exibe:
     - Total gasto no mês.
     - Distribuição por categoria.
     - Maiores gastos.
  3. (Opcional) O usuário troca o mês de referência.
- **Endpoint:** `GET /dashboard?mes=08&ano=2026`

## UC07 — Definir Orçamento 🟡

- **Ator:** Usuário
- **Objetivo:** Estabelecer um limite de gasto por categoria.
- **Fluxo Principal:**
  1. O usuário acessa "Orçamentos".
  2. Escolhe uma categoria e define o **valor-limite** mensal.
  3. O sistema salva e passa a acompanhar o consumo.
- **Regra de Negócio:** Ao atingir 80% do limite, o sistema sinaliza atenção; ao ultrapassar, sinaliza estouro.
- **Endpoints:**
  - `GET /orcamentos`
  - `POST /orcamentos`
  - `PUT /orcamentos/:id`

## UC08 — Criar Meta de Economia 🔵

- **Ator:** Usuário
- **Objetivo:** Planejar e acompanhar um objetivo de poupança.
- **Fluxo Principal:**
  1. O usuário cria uma meta (nome, valor-alvo, prazo).
  2. Registra aportes ao longo do tempo.
  3. O sistema calcula o progresso (%).
- **Endpoints:**
  - `GET /metas`
  - `POST /metas`
  - `PATCH /metas/:id`

## UC09 — Autenticar Usuário 🟡

- **Ator:** Usuário
- **Objetivo:** Acessar a plataforma de forma segura e ver apenas os próprios dados.
- **Fluxo Principal:**
  1. O usuário informa email e senha.
  2. O sistema valida as credenciais.
  3. Concede acesso à área logada.
- **Endpoints:**
  - `POST /usuarios` (cadastro)
  - `POST /login` (autenticação)

---

## 🔗 Mapeamento Casos de Uso × Endpoints (resumo para a documentação da API)

| Caso de Uso | Método HTTP | Endpoint | Status esperado |
|-------------|-------------|----------|-----------------|
| UC01 Registrar Gasto | `POST` | `/gastos` | `201 Created` / `400` |
| UC02 Listar Gastos | `GET` | `/gastos` | `200 OK` |
| UC02 Detalhar Gasto | `GET` | `/gastos/:id` | `200 OK` / `404` |
| UC03 Editar Gasto | `PUT`/`PATCH` | `/gastos/:id` | `200 OK` / `404` |
| UC04 Excluir Gasto | `DELETE` | `/gastos/:id` | `200 OK` / `404` |
| UC05 Categorias | `GET/POST/PUT/DELETE` | `/categorias` | `200`/`201`/`404` |
| UC06 Dashboard | `GET` | `/dashboard` | `200 OK` |
| UC07 Orçamentos | `GET/POST/PUT` | `/orcamentos` | `200`/`201` |
| UC08 Metas | `GET/POST/PATCH` | `/metas` | `200`/`201` |
| UC09 Autenticação | `POST` | `/login`, `/usuarios` | `200`/`201`/`401` |

> ✅ Este mapeamento já serve de **rascunho da documentação da API** (item de 2,0 pts da P1) e orienta quais **wireframes** desenhar (item de 2,0 pts): Dashboard, Listagem, Cadastro/Edição, Detalhes, Categorias e Orçamentos.
