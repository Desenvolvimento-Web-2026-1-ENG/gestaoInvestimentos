const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}/api/v1`;

export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'FinContas API — Gestão Financeira Pessoal',
    version: '1.0.0',
    description: 'Documentação oficial da API RESTful do FinContas construída em Clean Architecture (Node.js + Express + TypeScript).'
  },
  servers: [
    {
      url: BASE_URL,
      description: 'Servidor Local da API'
    }
  ],
  tags: [
    { name: 'Gastos', description: 'Operações de gerenciamento de despesas financeiras (CRUD)' },
    { name: 'Categorias', description: 'Consulta de categorias de despesas' },
    { name: 'Dashboard', description: 'Métricas, totais e visão consolidada de gastos' }
  ],
  paths: {
    '/gastos': {
      get: {
        summary: 'Lista todos os gastos com suporte a filtros',
        tags: ['Gastos'],
        parameters: [
          {
            name: 'mes',
            in: 'query',
            description: 'Mês no formato MM (ex: 08)',
            required: false,
            schema: { type: 'string', example: '08' }
          },
          {
            name: 'ano',
            in: 'query',
            description: 'Ano no formato YYYY (ex: 2026)',
            required: false,
            schema: { type: 'string', example: '2026' }
          },
          {
            name: 'categoria',
            in: 'query',
            description: 'Filtrar por nome da categoria',
            required: false,
            schema: { type: 'string', example: 'Alimentação' }
          }
        ],
        responses: {
          '200': {
            description: 'Lista de gastos retornada com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Gasto' }
                }
              }
            }
          },
          '500': {
            description: 'Erro interno do servidor'
          }
        }
      },
      post: {
        summary: 'Registra um novo gasto',
        tags: ['Gastos'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/CriarGastoDTO' }
            }
          }
        },
        responses: {
          '201': {
            description: 'Gasto registrado com sucesso',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Gasto' }
              }
            }
          },
          '400': {
            description: 'Dados inválidos ou campos obrigatórios ausentes',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErroValidacao' }
              }
            }
          },
          '500': {
            description: 'Erro interno do servidor'
          }
        }
      }
    },
    '/gastos/{id}': {
      get: {
        summary: 'Busca os detalhes de um gasto por ID',
        tags: ['Gastos'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Identificador único (UUID) do gasto',
            schema: { type: 'string' }
          }
        ],
        responses: {
          '200': {
            description: 'Gasto encontrado',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Gasto' }
              }
            }
          },
          '404': {
            description: 'Gasto não encontrado'
          }
        }
      },
      put: {
        summary: 'Atualiza um gasto existente por ID',
        tags: ['Gastos'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Identificador único (UUID) do gasto',
            schema: { type: 'string' }
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/AtualizarGastoDTO' }
            }
          }
        },
        responses: {
          '200': {
            description: 'Gasto atualizado com sucesso',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Gasto' }
              }
            }
          },
          '400': {
            description: 'Dados inválidos'
          },
          '404': {
            description: 'Gasto não encontrado'
          }
        }
      },
      delete: {
        summary: 'Exclui um gasto existente por ID',
        tags: ['Gastos'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Identificador único (UUID) do gasto',
            schema: { type: 'string' }
          }
        ],
        responses: {
          '200': {
            description: 'Gasto excluído com sucesso'
          },
          '404': {
            description: 'Gasto não encontrado'
          }
        }
      }
    },
    '/categorias': {
      get: {
        summary: 'Lista as categorias padrão do sistema',
        tags: ['Categorias'],
        responses: {
          '200': {
            description: 'Lista de categorias',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { type: 'string' },
                  example: ['Alimentação', 'Transporte', 'Moradia', 'Lazer', 'Saúde', 'Educação', 'Outros']
                }
              }
            }
          }
        }
      }
    },
    '/dashboard/resumo': {
      get: {
        summary: 'Obtém resumo financeiro consolidado do mês',
        tags: ['Dashboard'],
        parameters: [
          {
            name: 'mes',
            in: 'query',
            description: 'Mês (ex: 08)',
            required: false,
            schema: { type: 'string' }
          },
          {
            name: 'ano',
            in: 'query',
            description: 'Ano (ex: 2026)',
            required: false,
            schema: { type: 'string' }
          }
        ],
        responses: {
          '200': {
            description: 'Resumo financeiro retornado com sucesso',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/DashboardResumo' }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      Gasto: {
        type: 'object',
        properties: {
          id: { type: 'string', example: 'd1a8c456-7890-4abc-def1-1234567890ab' },
          descricao: { type: 'string', example: 'Supermercado Semanal' },
          valor: { type: 'number', example: 350.50 },
          data: { type: 'string', example: '2026-08-26' },
          categoria: { type: 'string', example: 'Alimentação' },
          formaPagamento: { type: 'string', example: 'Cartão de Crédito' },
          criadoEm: { type: 'string', example: '2026-08-26T21:00:00.000Z' }
        }
      },
      CriarGastoDTO: {
        type: 'object',
        required: ['descricao', 'valor', 'data', 'categoria', 'formaPagamento'],
        properties: {
          descricao: { type: 'string', example: 'Supermercado Semanal' },
          valor: { type: 'number', example: 350.50 },
          data: { type: 'string', example: '2026-08-26' },
          categoria: { type: 'string', example: 'Alimentação' },
          formaPagamento: { type: 'string', example: 'Cartão de Crédito' }
        }
      },
      AtualizarGastoDTO: {
        type: 'object',
        properties: {
          descricao: { type: 'string', example: 'Supermercado Mensal Atualizado' },
          valor: { type: 'number', example: 420.00 },
          data: { type: 'string', example: '2026-08-26' },
          categoria: { type: 'string', example: 'Alimentação' },
          formaPagamento: { type: 'string', example: 'PIX' }
        }
      },
      ErroValidacao: {
        type: 'object',
        properties: {
          erro: { type: 'string', example: 'Dados inválidos' },
          detalhes: {
            type: 'array',
            items: { type: 'string' },
            example: ["O campo 'descricao' é obrigatório.", "O campo 'valor' deve ser maior que zero."]
          }
        }
      },
      DashboardResumo: {
        type: 'object',
        properties: {
          mes: { type: 'string', example: '08' },
          ano: { type: 'string', example: '2026' },
          totalGasto: { type: 'number', example: 686.65 },
          totalPorCategoria: {
            type: 'object',
            additionalProperties: { type: 'number' },
            example: {
              Alimentação: 450.75,
              Transporte: 180.00,
              Lazer: 55.90
            }
          },
          quantidadeGastos: { type: 'integer', example: 3 },
          maioresGastos: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                descricao: { type: 'string' },
                valor: { type: 'number' },
                categoria: { type: 'string' },
                data: { type: 'string' }
              }
            }
          }
        }
      }
    }
  }
};
