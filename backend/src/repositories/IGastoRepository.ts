import { Gasto } from '@entities/Gasto';

export interface IGastoRepository {
  criar(gasto: Gasto): Gasto;
}
