import { Router, Request, Response } from 'express';
import { GastoFactory } from '@factories/GastoFactory';

const router = Router();
const controller = GastoFactory.criarController();

/**
 * @route   POST /gastos
 * @desc    Registra um novo gasto (UC01)
 * @access  Public (sem autenticação nesta fase)
 */
router.post('/gastos', (req: Request, res: Response) => controller.criar(req, res));

export default router;
