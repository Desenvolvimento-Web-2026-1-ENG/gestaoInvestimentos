import { Gasto } from '@entities/Gasto';

export interface FiltrosGasto {
  mes?: string | undefined;
  ano?: string | undefined;
  categoria?: string | undefined;
}

export interface IGastoRepository {
  criar(gasto: Gasto): Gasto;
  listar(filtros?: FiltrosGasto): Gasto[];
  buscarPorId(id: string): Gasto | null;
  atualizar(id: string, dados: Partial<Omit<Gasto, 'id' | 'criadoEm'>>): Gasto | null;
  excluir(id: string): boolean;
  listarCategorias(): string[];
}
