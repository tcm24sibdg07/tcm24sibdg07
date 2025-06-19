import { Count, Filter, Where } from '@loopback/repository';
import { Categoria, Produto } from '../models';
import { CategoriaRepository } from '../repositories';
export declare class CategoriaProdutoController {
    protected categoriaRepository: CategoriaRepository;
    constructor(categoriaRepository: CategoriaRepository);
    find(id: number, filter?: Filter<Produto>): Promise<Produto[]>;
    create(id: typeof Categoria.prototype.id, produto: Omit<Produto, 'id'>): Promise<Produto>;
    patch(id: number, produto: Partial<Produto>, where?: Where<Produto>): Promise<Count>;
    delete(id: number, where?: Where<Produto>): Promise<Count>;
}
