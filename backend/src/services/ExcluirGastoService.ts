import { IGastoRepository } from '@repositories/IGastoRepository';

export class ExcluirGastoService {
  constructor(private gastoRepository: IGastoRepository) {}

  excluir(id: string): void {
    if (!id || id.trim() === '') {
      const error = new Error('ID do gasto é obrigatório.');
      (error as any).status = 400;
      throw error;
    }

    const gasto = this.gastoRepository.buscarPorId(id);
    if (!gasto) {
      const error = new Error('Gasto não encontrado para exclusão.');
      (error as any).status = 404;
      throw error;
    }

    const removido = this.gastoRepository.excluir(id);
    if (!removido) {
      const error = new Error('Não foi possível excluir o gasto.');
      (error as any).status = 500;
      throw error;
    }
  }
}
