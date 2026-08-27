import { Request, Response } from 'express';
import { RegistrarGastoService } from '@services/RegistrarGastoService';
import { ConsultarGastosService } from '@services/ConsultarGastosService';
import { AtualizarGastoService } from '@services/AtualizarGastoService';
import { ExcluirGastoService } from '@services/ExcluirGastoService';
import { DashboardService } from '@services/DashboardService';
import { CriarGastoDTO, AtualizarGastoDTO, FiltroGastosDTO } from '@services/dtos/GastoDTOs';

export class GastoController {
  constructor(
    private registrarGastoService: RegistrarGastoService,
    private consultarGastosService: ConsultarGastosService,
    private atualizarGastoService: AtualizarGastoService,
    private excluirGastoService: ExcluirGastoService,
    private dashboardService: DashboardService
  ) {}

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

  listar(req: Request, res: Response): void {
    try {
      const filtros: FiltroGastosDTO = {
        mes: req.query.mes as string | undefined,
        ano: req.query.ano as string | undefined,
        categoria: req.query.categoria as string | undefined,
      };
      const gastos = this.consultarGastosService.listar(filtros);
      res.status(200).json(gastos);
    } catch (error: any) {
      res.status(500).json({ erro: 'Erro interno do servidor ao listar gastos.' });
    }
  }

  buscarPorId(req: Request, res: Response): void {
    try {
      const id = String(req.params.id || '');
      const gasto = this.consultarGastosService.buscarPorId(id);
      res.status(200).json(gasto);
    } catch (error: any) {
      const status = error.status || 500;
      res.status(status).json({ erro: error.message });
    }
  }

  atualizar(req: Request, res: Response): void {
    try {
      const id = String(req.params.id || '');
      const dados: AtualizarGastoDTO = req.body;
      const gastoAtualizado = this.atualizarGastoService.atualizar(id, dados);
      res.status(200).json(gastoAtualizado);
    } catch (error: any) {
      const status = error.status || 500;
      res.status(status).json({
        erro: error.message,
        detalhes: error.detalhes || undefined,
      });
    }
  }

  excluir(req: Request, res: Response): void {
    try {
      const id = String(req.params.id || '');
      this.excluirGastoService.excluir(id);
      res.status(200).json({ mensagem: 'Gasto excluído com sucesso.' });
    } catch (error: any) {
      const status = error.status || 500;
      res.status(status).json({ erro: error.message });
    }
  }

  listarCategorias(req: Request, res: Response): void {
    try {
      const categorias = this.consultarGastosService.listarCategorias();
      res.status(200).json(categorias);
    } catch (error: any) {
      res.status(500).json({ erro: 'Erro interno ao listar categorias.' });
    }
  }

  obterDashboard(req: Request, res: Response): void {
    try {
      const mes = req.query.mes as string | undefined;
      const ano = req.query.ano as string | undefined;
      const resumo = this.dashboardService.obterResumo(mes, ano);
      res.status(200).json(resumo);
    } catch (error: any) {
      res.status(500).json({ erro: 'Erro interno ao obter resumo do dashboard.' });
    }
  }
}

