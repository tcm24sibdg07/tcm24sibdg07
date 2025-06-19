import { Encomenda, Cliente } from '../models';
import { EncomendaRepository } from '../repositories';
export declare class EncomendaClienteController {
    encomendaRepository: EncomendaRepository;
    constructor(encomendaRepository: EncomendaRepository);
    getCliente(id: typeof Encomenda.prototype.id): Promise<Cliente>;
}
