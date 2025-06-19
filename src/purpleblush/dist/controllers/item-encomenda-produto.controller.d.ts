import { ItemEncomenda, Produto } from '../models';
import { ItemEncomendaRepository } from '../repositories';
export declare class ItemEncomendaProdutoController {
    itemEncomendaRepository: ItemEncomendaRepository;
    constructor(itemEncomendaRepository: ItemEncomendaRepository);
    getProduto(id: typeof ItemEncomenda.prototype.id): Promise<Produto>;
}
