import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {PurpleblushDataSource} from '../datasources';
import {ItemEncomenda, ItemEncomendaRelations, Encomenda, Produto} from '../models';
import {EncomendaRepository} from './encomenda.repository';
import {ProdutoRepository} from './produto.repository';

export class ItemEncomendaRepository extends DefaultCrudRepository<
  ItemEncomenda,
  typeof ItemEncomenda.prototype.id,
  ItemEncomendaRelations
> {

  public readonly encomenda: BelongsToAccessor<Encomenda, typeof ItemEncomenda.prototype.id>;

  public readonly produto: BelongsToAccessor<Produto, typeof ItemEncomenda.prototype.id>;

  constructor(
    @inject('datasources.purpleblush') dataSource: PurpleblushDataSource, @repository.getter('EncomendaRepository') protected encomendaRepositoryGetter: Getter<EncomendaRepository>, @repository.getter('ProdutoRepository') protected produtoRepositoryGetter: Getter<ProdutoRepository>,
  ) {
    super(ItemEncomenda, dataSource);
    this.produto = this.createBelongsToAccessorFor('produto', produtoRepositoryGetter,);
    this.registerInclusionResolver('produto', this.produto.inclusionResolver);
    this.encomenda = this.createBelongsToAccessorFor('encomenda', encomendaRepositoryGetter,);
    this.registerInclusionResolver('encomenda', this.encomenda.inclusionResolver);
  }
}
