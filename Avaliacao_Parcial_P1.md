Roteiro de Avaliação Parcial (P1) — Desenvolvimento Web

Tipo de Avaliação: Projeto Prático Individual (Tema Designado)
Conteúdos Abrangidos: HTML, CSS, JavaScript, Node.js e Versionamento Git/GitHub
Valor Total: 10,0 pontos

 1. Visão Geral do Projeto

A Avaliação Parcial (P1) tem como objetivo consolidar a base prática do desenvolvimento web fullstack, com foco na arquitetura inicial da API em Node.js, na documentação técnica dos endpoints, na elaboração dos wireframes das telas que comporão o front-end (HTML/CSS/JS) e no cumprimento do fluxo de publicação e release via GitHub.
Cada estudante deve implementar o projeto com base no tema individual previamente atribuído em aula.2. 

Escopo e Entregáveis Obrigatórios

Para a avaliação da P1, você deverá entregar:
Back-end (API Node.js): Código-fonte funcional da API REST contendo as rotas e regras de negócio essenciais do seu tema.
Documentação da API: Especificação completa de todas as rotas, parâmetros, requisições e respostas.
Wireframes da Interface: Protótipos visuais de baixa ou média fidelidade das telas que farão consumo da API na entrega final.
Repositório GitHub & Release v1.0.0-p1: Histórico de versionamento organizado, arquivo README.md detalhado e a publicação oficial de uma Release no GitHub.

3. Tabela de Distribuição da Pontuação

Construção e Funcionalidade da API Node.js - 3,5 pts

Documentação Técnica da API - 2,0 pts

Wireframes e Planejamento da Interface (HTML/CSS) - 2,0 pts

Boas Práticas de Código e Organização - 1,0 pt

Versionamento Git, README e Release no GitHub - 1,5 pts

TOTAL - 10,0 pts

Critérios Avaliação:

Construção da API em Node.js (3,5 Pontos)

Estrutura de Rotas e Verbos HTTP (1,5 pt): Uso correto dos métodos HTTP (GET, POST, PUT/PATCH, DELETE) alinhados às boas práticas REST.
Manipulação de Parâmetros e Respostas (1,0 pt): Extração correta de dados via req.body, req.params e req.query, retornando dados estruturados em formato JSON.
Status Codes HTTP (1,0 pt): Retorno de status HTTP condizentes com o resultado da operação (ex: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error).

Documentação da API (2,0 Pontos)
Detalhamento dos Endpoints (1,0 pt): Descrição das URLs, verbos, headers necessários e estrutura do corpo da requisição (payload).
Exemplos de Resposta e Tratamento de Erro (0,5 pt): Exemplos nítidos de retornos de sucesso e retornos de erro esperados.
Acessibilidade da Documentação (0,5 pt): Documentação entregue via Swagger/OpenAPI, arquivo README.md bem formatado ou coleção exportada do Postman/Insomnia com ambiente configurado.

Wireframes e Planejamento da Interface (2,0 Pontos)
Cobertura das Telas Previstas (1,0 pt): Apresentação dos wireframes de todas as páginas principais do projeto (Listagem, Cadastro/Edição, Detalhes, Dashboard, etc.).
Mapeamento da Integração com a API (1,0 pt): Indicação clara (visual ou por legenda) de quais componentes e formulários dos wireframes disparam requisições para cada endpoint da API Node.js.

Qualidade do Código JavaScript / Node.js (1,0 Ponto)
Organização e Modularização (0,5 pt): Separação básica em módulos/camadas (ex: divisão de rotas e controladores/serviços).
Padrões de Nomenclatura e Boas Práticas (0,5 pt): Código limpo, uso de camelCase, declaração adequada de variáveis (const/let), sem código morto ou comentários irrelevantes.

Versionamento Git e Release no GitHub (1,5 Ponto)
Histórico de Commits (0,5 pt): Commits pequenos, frequentes e mensagens descritivas do progresso do trabalho.
Arquivo README.md (0,5 pt): Apresentação do tema, requisitos do sistema, instruções passo a passo para execução da API (npm install, npm start) e links/imagens dos wireframes.
Geração da Release no GitHub (0,5 pt): Criação e publicação formal de uma Release na plataforma GitHub com a tag v1.0.0-p1, contendo notas de lançamento (Release Notes).

Passo a Passo: Como Gerar a Release no GitHub

A criação da Release garante o congelamento do estado do seu projeto no momento exato da entrega da P1. 

Siga as instruções abaixo:
Realize o commit e o push de todo o código finalizado para a branch principal (main ou master):
git add .
git commit -m "feat: finaliza escopo da avaliacao P1"
git push origin main
No navegador, acesse o repositório do seu projeto no GitHub.
Na barra lateral direita, clique na opção Releases (ou acesse a aba Tags -> Releases).
Clique no botão "Draft a new release" (ou "Create a new release").
No campo Choose a tag, digite v1.0.0-p1 e clique em Create new tag: v1.0.0-p1 on target: main.
No campo Release title, informe: Avaliação Parcial P1 - Entrega da API e Wireframes.
No campo de descrição, inclua um breve texto resumindo o que foi entregue. Exemplo:

## Entrega da Avaliação Parcial (P1)

### Recursos Implementados:
- API REST em Node.js com operações de CRUD para o tema [Nome do Tema].
- Documentação completa dos endpoints.
- Wireframes do front-end vinculados às rotas da API.
- README formatado com guia de instalação.
Clique no botão verde "Publish release".


6. Checklist Obrigatório de Entrega
Antes de enviar o link do repositório, certifique-se de que atendeu a todos os itens:
[ ] Repositório na organização criada no GitHub  para a disciplina.
[ ] Arquivo .gitignore configurado (a pasta node_modules NÃO deve ser enviada).
[ ] API Node.js inicializando sem erros ao rodar npm start ou node index.js.
[ ] Documentação da API incluída no repositório (Postman JSON, Swagger ou no README).
[ ] Imagens ou links dos Wireframes incluídos no repositório/README.
[ ] Arquivo README.md preenchido com descrição e instruções de execução.
[ ] Tag e Release v1.0.0-p1 criada e publicada oficialmente no GitHub.