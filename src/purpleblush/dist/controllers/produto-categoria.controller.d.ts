import { Produto, Categoria } from '../models';
import { ProdutoRepository } from '../repositories';
export declare class ProdutoCategoriaController {
    produtoRepository: ProdutoRepository;
    constructor(produtoRepository: ProdutoRepository);
    getCategoria(id: typeof Produto.prototype.id): Promise<Categoria>;
}
