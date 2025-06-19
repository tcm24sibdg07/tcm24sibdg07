import { Encomenda, Estado } from '../models';
import { EncomendaRepository } from '../repositories';
export declare class EncomendaEstadoController {
    encomendaRepository: EncomendaRepository;
    constructor(encomendaRepository: EncomendaRepository);
    getEstado(id: typeof Encomenda.prototype.id): Promise<Estado>;
}
