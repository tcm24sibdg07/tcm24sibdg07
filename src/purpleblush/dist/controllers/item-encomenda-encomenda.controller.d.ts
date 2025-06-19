import { ItemEncomenda, Encomenda } from '../models';
import { ItemEncomendaRepository } from '../repositories';
export declare class ItemEncomendaEncomendaController {
    itemEncomendaRepository: ItemEncomendaRepository;
    constructor(itemEncomendaRepository: ItemEncomendaRepository);
    getEncomenda(id: typeof ItemEncomenda.prototype.id): Promise<Encomenda>;
}
