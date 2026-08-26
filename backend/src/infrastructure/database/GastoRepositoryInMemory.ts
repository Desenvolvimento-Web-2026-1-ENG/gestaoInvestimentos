import { Gasto } from "@entities/Gasto";
import { IGastoRepository } from "@repositories/IGastoRepository";

// Escopo global do módulo para simular um banco de dados único
const gastos: Gasto[] = [];

export class GastoRepositoryInMemory implements IGastoRepository {
  criar(gasto: Gasto): Gasto {
    gastos.push(gasto);
    return gasto;
  }
}
