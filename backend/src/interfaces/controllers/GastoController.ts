import { Request, Response } from 'express';
import { RegistrarGastoService } from '@services/RegistrarGastoService';
import { CriarGastoDTO } from '@services/dtos/GastoDTOs';

export class GastoController {
  constructor(private registrarGastoService: RegistrarGastoService) {}

  criar(req: Request, res: Response): void {
    try {
      const dados: CriarGastoDTO = req.body;
      const novoGasto = this.registrarGastoService.registrar(dados);
      res.status(201).json(novoGasto);
    } catch (error: any) {
      if (error.message === 'Dados inválidos') {
        res.status(400).json({
          erro: error.message,
          detalhes: error.detalhes || [],
        });
        return;
      }
      res.status(500).json({ erro: 'Erro interno do servidor.' });
    }
  }
}
