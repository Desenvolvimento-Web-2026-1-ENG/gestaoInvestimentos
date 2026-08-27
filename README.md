# 💰 FinContas — Plataforma de Gestão Financeira Pessoal

> **Projeto Prático da Disciplina de Desenvolvimento Web — Avaliação Parcial (P1)**  
> **Tema:** Gestão Financeira de Gastos Pessoais  
> **Versão:** `v1.0.0-p1`

---

## 📌 1. Visão Geral do Projeto

O **FinContas** é uma aplicação web voltada ao controle, organização e análise de gastos pessoais. O sistema permite registrar despesas com data, valor, categoria e forma de pagamento, fornecendo relatórios mensais e visão consolidada no Dashboard para tomada de decisões financeiras.

Para a **Avaliação Parcial (P1)**, foi desenvolvida a **API RESTful completa em Node.js com TypeScript** baseada nos princípios de **Clean Architecture**, documentada com **Swagger (OpenAPI 3.0)** e **Postman**, além do planejamento visual e mapeamento dos **Wireframes** da interface front-end.

---

## 🚀 2. Tecnologias Utilizadas

- **Runtime:** Node.js (v18+)
- **Linguagem:** TypeScript
- **Framework Web:** Express.js
- **Validação e Utilitários:** UUID v4
- **Documentação de API:** Swagger UI Express & OpenAPI 3.0
- **Ferramenta de Testes de API:** Postman
- **Execução e Live Reload:** tsx / TypeScript Compiler

---

## 🏗️ 3. Arquitetura do Sistema (Clean Architecture)

A estrutura do back-end foi organizada em camadas desacopladas:

```
backend/
├── src/
│   ├── entities/               # Entidades de domínio (Gasto)
│   ├── repositories/           # Interfaces de repositório (IGastoRepository)
│   ├── services/               # Casos de uso / Regras de negócio (CRUD & Dashboard)
│   │   └── dtos/               # Data Transfer Objects (Tipagens de entrada/saída)
│   ├── interfaces/
│   │   └── controllers/        # Controladores HTTP (GastoController)
│   ├── factories/              # Injeção de dependências (GastoFactory)
│   └── infrastructure/
│       ├── database/           # Implementação de persistência em memória
│       └── http/
│           ├── docs/           # Especificação Swagger / OpenAPI
│           ├── routes/         # Definição de rotas Express
│           └── server.ts       # Ponto de entrada do servidor
├── package.json
└── tsconfig.json
```

---

## ⚙️ 4. Guia de Instalação e Execução

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado na máquina (versão 18 ou superior).

### Passo a passo:

1. **Acesse a pasta do backend:**
   ```bash
   cd gestaoFinanceira/backend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor em modo de desenvolvimento (com auto-reload):**
   ```bash
   npm run dev
   ```

4. **Ou execute em modo de produção:**
   ```bash
   npm run build
   npm start
   ```

O servidor estará disponível em: **`http://localhost:3000`**

---

## 📑 5. Documentação Interativa da API (Swagger & Postman)

### 🟢 Swagger UI (Navegador)
Com o servidor rodando, acesse a documentação interativa com suporte ao botão *"Try it out"*:
👉 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

### 📮 Coleção Postman Pronta para Importar
Na raiz do projeto está disponível o arquivo:
📄 **[`FinContas.postman_collection.json`](./FinContas.postman_collection.json)**

**Como usar no Postman:**
1. Abra o Postman e clique em **Import** (canto superior esquerdo).
2. Selecione o arquivo `FinContas.postman_collection.json`.
3. Todas as rotas (CRUD, filtros, dashboard e categorias) estarão configuradas prontas para execução imediata.

---

## 🌐 6. Tabela de Endpoints da API REST

URL Base: `http://localhost:3000/api/v1`

| Método | Endpoint | Descrição | Status de Sucesso | Status de Erro |
| :---: | :--- | :--- | :---: | :---: |
| `POST` | `/gastos` | Registra uma nova despesa (UC01) | `201 Created` | `400`, `500` |
| `GET` | `/gastos` | Lista todos os gastos (com filtros por query params) (UC02) | `200 OK` | `500` |
| `GET` | `/gastos/:id` | Retorna os detalhes de um gasto por ID (UC02) | `200 OK` | `400`, `404` |
| `PUT` | `/gastos/:id` | Atualiza os dados de um gasto existente (UC03) | `200 OK` | `400`, `404` |
| `DELETE` | `/gastos/:id` | Remove um gasto existente (UC04) | `200 OK` | `400`, `404` |
| `GET` | `/categorias` | Lista as categorias disponíveis (UC05) | `200 OK` | `500` |
| `GET` | `/dashboard/resumo` | Retorna totais e métricas consolidadas (UC06) | `200 OK` | `500` |

---

### Exemplos de Requisição e Resposta

#### 🟢 1. Cadastrar Gasto (`POST /api/v1/gastos`)
**Corpo da Requisição (JSON):**
```json
{
  "descricao": "Supermercado Mensal",
  "valor": 350.50,
  "data": "2026-08-26",
  "categoria": "Alimentação",
  "formaPagamento": "Cartão de Crédito"
}
```
**Resposta (`201 Created`):**
```json
{
  "id": "6315b523-ea6d-4695-8f1c-05d582033482",
  "descricao": "Supermercado Mensal",
  "valor": 350.5,
  "data": "2026-08-26",
  "categoria": "Alimentação",
  "formaPagamento": "Cartão de Crédito",
  "criadoEm": "2026-08-27T01:03:07.885Z"
}
```

---

#### 🟢 2. Listar Gastos com Filtros (`GET /api/v1/gastos?mes=08&ano=2026&categoria=Alimentação`)
**Resposta (`200 OK`):**
```json
[
  {
    "id": "d1a8c456-7890-4abc-def1-1234567890ab",
    "descricao": "Compras do Mês - Supermercado",
    "valor": 450.75,
    "data": "2026-08-10",
    "categoria": "Alimentação",
    "formaPagamento": "Cartão de Crédito",
    "criadoEm": "2026-08-10T14:30:00.000Z"
  }
]
```

---

#### 🟢 3. Resumo do Dashboard (`GET /api/v1/dashboard/resumo?mes=08&ano=2026`)
**Resposta (`200 OK`):**
```json
{
  "mes": "08",
  "ano": "2026",
  "totalGasto": 686.65,
  "totalPorCategoria": {
    "Alimentação": 450.75,
    "Transporte": 180,
    "Lazer": 55.9
  },
  "quantidadeGastos": 3,
  "maioresGastos": [
    {
      "id": "d1a8c456-7890-4abc-def1-1234567890ab",
      "descricao": "Compras do Mês - Supermercado",
      "valor": 450.75,
      "categoria": "Alimentação",
      "data": "2026-08-10"
    }
  ]
}
```

---

## 📱 7. Wireframes da Interface e Mapeamento de Rotas

O documento completo com os wireframes e vínculo com a API está disponível em:  
👉 **[`docs/WIREFRAMES.md`](./docs/WIREFRAMES.md)**

### Visão Resumida das Telas:
- **Dashboard:** Consome `GET /dashboard/resumo` e exibe totalizadores e gráficos.
- **Listagem de Gastos:** Consome `GET /gastos` e aciona `DELETE /gastos/:id`.
- **Cadastro de Despesa:** Consome `GET /categorias` e dispara `POST /gastos`.
- **Edição de Despesa:** Consome `GET /gastos/:id` e dispara `PUT /gastos/:id`.

---

## 📦 8. Checklist de Entrega da Avaliação Parcial (P1)

- [x] Repositório estruturado no GitHub.
- [x] Arquivo `.gitignore` configurado (pasta `node_modules` ignorada).
- [x] API Node.js/TypeScript inicializando sem erros com `npm run dev` e `npm start`.
- [x] Documentação interativa via **Swagger** (`/api-docs`) e arquivo exportável do **Postman**.
- [x] Wireframes completos e mapeados com os endpoints da API (`docs/WIREFRAMES.md`).
- [x] Arquivo `README.md` detalhado com apresentação, instruções de execução e exemplos.
- [x] Tag e Release **`v1.0.0-p1`** pronta para publicação.

---

## 🏷️ 9. Passo a Passo para Publicar a Release no GitHub

Após realizar o commit e push do projeto para a branch principal:

```bash
git add .
git commit -m "feat: finaliza escopo da avaliacao P1 com CRUD, Swagger, Postman e Wireframes"
git push origin main
```

1. No GitHub, acesse a aba lateral **Releases** (ou *Tags -> Releases*).
2. Clique em **Draft a new release** (ou *Create a new release*).
3. No campo **Choose a tag**, digite: `v1.0.0-p1` e clique em *Create new tag*.
4. No campo **Release title**, digite: `Avaliação Parcial P1 - Entrega da API e Wireframes`.
5. No campo de descrição, cole o seguinte resumo:

```markdown
## Entrega da Avaliação Parcial (P1) — FinContas

### Recursos Implementados:
- API RESTful em Node.js com TypeScript e Clean Architecture com operações completas de CRUD (Gastos, Categorias e Dashboard).
- Documentação interativa via Swagger OpenAPI 3.0 (`/api-docs`) e Coleção Postman exportável.
- Wireframes de interface gráfica com mapeamento detalhado dos endpoints HTTP consumidos por cada componente.
- README.md profissional e formatado com manual de instalação e execução.
```

6. Clique no botão verde **Publish release**.
