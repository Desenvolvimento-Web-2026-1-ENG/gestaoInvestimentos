import { Gasto } from '@entities/Gasto';
import { IGastoRepository } from '@repositories/IGastoRepository';
import { FiltroGastosDTO } from './dtos/GastoDTOs.js';

export class ConsultarGastosService {
  constructor(private gastoRepository: IGastoRepository) {}

  listar(filtros?: FiltroGastosDTO): Gasto[] {
    return this.gastoRepository.listar(filtros);
  }

  buscarPorId(id: string): Gasto {
    if (!id || id.trim() === '') {
      const error = new Error('ID do gasto é obrigatório.');
      (error as any).status = 400;
      throw error;
    }

    const gasto = this.gastoRepository.buscarPorId(id);
    if (!gasto) {
      const error = new Error('Gasto não encontrado.');
      (error as any).status = 404;
      throw error;
    }

    return gasto;
  }

  listarCategorias(): string[] {
    return this.gastoRepository.listarCategorias();
  }
}
