import { Router, Request, Response } from 'express';
import { GastoFactory } from '@factories/GastoFactory.js';

const router = Router();
const controller = GastoFactory.criarController();

/**
 * @route   POST /gastos
 * @desc    Registra um novo gasto (UC01)
 */
router.post('/gastos', (req: Request, res: Response) => controller.criar(req, res));

/**
 * @route   GET /gastos
 * @desc    Lista todos os gastos, com suporte a filtros por mes, ano e categoria (UC02)
 */
router.get('/gastos', (req: Request, res: Response) => controller.listar(req, res));

/**
 * @route   GET /gastos/:id
 * @desc    Busca um gasto específico pelo ID (UC02)
 */
router.get('/gastos/:id', (req: Request, res: Response) => controller.buscarPorId(req, res));

/**
 * @route   PUT /gastos/:id
 * @desc    Atualiza um gasto existente pelo ID (UC03)
 */
router.put('/gastos/:id', (req: Request, res: Response) => controller.atualizar(req, res));

/**
 * @route   DELETE /gastos/:id
 * @desc    Exclui um gasto existente pelo ID (UC04)
 */
router.delete('/gastos/:id', (req: Request, res: Response) => controller.excluir(req, res));

/**
 * @route   GET /categorias
 * @desc    Lista as categorias disponíveis (UC05)
 */
router.get('/categorias', (req: Request, res: Response) => controller.listarCategorias(req, res));

/**
 * @route   GET /dashboard/resumo
 * @desc    Retorna totais consolidados e métricas para o Dashboard (UC06)
 */
router.get('/dashboard/resumo', (req: Request, res: Response) => controller.obterDashboard(req, res));

export default router;

