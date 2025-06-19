import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { PurpleblushDataSource } from '../datasources';
import { ItemEncomenda, ItemEncomendaRelations, Encomenda, Produto } from '../models';
import { EncomendaRepository } from './encomenda.repository';
import { ProdutoRepository } from './produto.repository';
export declare class ItemEncomendaRepository extends DefaultCrudRepository<ItemEncomenda, typeof ItemEncomenda.prototype.id, ItemEncomendaRelations> {
    protected encomendaRepositoryGetter: Getter<EncomendaRepository>;
    protected produtoRepositoryGetter: Getter<ProdutoRepository>;
    readonly encomenda: BelongsToAccessor<Encomenda, typeof ItemEncomenda.prototype.id>;
    readonly produto: BelongsToAccessor<Produto, typeof ItemEncomenda.prototype.id>;
    constructor(dataSource: PurpleblushDataSource, encomendaRepositoryGetter: Getter<EncomendaRepository>, produtoRepositoryGetter: Getter<ProdutoRepository>);
}
