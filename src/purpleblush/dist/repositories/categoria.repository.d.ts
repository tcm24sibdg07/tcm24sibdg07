import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { PurpleblushDataSource } from '../datasources';
import { Categoria, CategoriaRelations, Produto } from '../models';
import { ProdutoRepository } from './produto.repository';
export declare class CategoriaRepository extends DefaultCrudRepository<Categoria, typeof Categoria.prototype.id, CategoriaRelations> {
    protected produtoRepositoryGetter: Getter<ProdutoRepository>;
    readonly produtos: HasManyRepositoryFactory<Produto, typeof Categoria.prototype.id>;
    constructor(dataSource: PurpleblushDataSource, produtoRepositoryGetter: Getter<ProdutoRepository>);
}
