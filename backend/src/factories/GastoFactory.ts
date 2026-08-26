import { GastoController } from "@interfaces/controllers/GastoController";
import { RegistrarGastoService } from "@services/RegistrarGastoService";
import { GastoRepositoryInMemory } from "@infrastructure/database/GastoRepositoryInMemory";

export class GastoFactory {
  static criarController(): GastoController {
    // 1. Instanciamos o repositório
    const gastoRepo = new GastoRepositoryInMemory();

    // 2. Injetamos no Service
    const service = new RegistrarGastoService(gastoRepo);

    // 3. Devolvemos o Controller pronto
    return new GastoController(service);
  }
}
