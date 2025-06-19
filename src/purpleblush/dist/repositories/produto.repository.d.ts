import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, BelongsToAccessor } from '@loopback/repository';
import { PurpleblushDataSource } from '../datasources';
import { Produto, ProdutoRelations, ItemEncomenda, Categoria } from '../models';
import { ItemEncomendaRepository } from './item-encomenda.repository';
import { CategoriaRepository } from './categoria.repository';
export declare class ProdutoRepository extends DefaultCrudRepository<Produto, typeof Produto.prototype.id, ProdutoRelations> {
    protected itemEncomendaRepositoryGetter: Getter<ItemEncomendaRepository>;
    protected categoriaRepositoryGetter: Getter<CategoriaRepository>;
    readonly itemEncomendas: HasManyRepositoryFactory<ItemEncomenda, typeof Produto.prototype.id>;
    readonly categoria: BelongsToAccessor<Categoria, typeof Produto.prototype.id>;
    constructor(dataSource: PurpleblushDataSource, itemEncomendaRepositoryGetter: Getter<ItemEncomendaRepository>, categoriaRepositoryGetter: Getter<CategoriaRepository>);
}
