import { Count, Filter, Where } from '@loopback/repository';
import { Produto, ItemEncomenda } from '../models';
import { ProdutoRepository } from '../repositories';
export declare class ProdutoItemEncomendaController {
    protected produtoRepository: ProdutoRepository;
    constructor(produtoRepository: ProdutoRepository);
    find(id: number, filter?: Filter<ItemEncomenda>): Promise<ItemEncomenda[]>;
    create(id: typeof Produto.prototype.id, itemEncomenda: Omit<ItemEncomenda, 'id'>): Promise<ItemEncomenda>;
    patch(id: number, itemEncomenda: Partial<ItemEncomenda>, where?: Where<ItemEncomenda>): Promise<Count>;
    delete(id: number, where?: Where<ItemEncomenda>): Promise<Count>;
}
