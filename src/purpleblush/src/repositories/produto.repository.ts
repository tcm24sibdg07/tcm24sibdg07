import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {PurpleblushDataSource} from '../datasources';
import {Produto, ProdutoRelations, ItemEncomenda, Categoria} from '../models';
import {ItemEncomendaRepository} from './item-encomenda.repository';
import {CategoriaRepository} from './categoria.repository';

export class ProdutoRepository extends DefaultCrudRepository<
  Produto,
  typeof Produto.prototype.id,
  ProdutoRelations
> {

  public readonly itemEncomendas: HasManyRepositoryFactory<ItemEncomenda, typeof Produto.prototype.id>;

  public readonly categoria: BelongsToAccessor<Categoria, typeof Produto.prototype.id>;

  constructor(
    @inject('datasources.purpleblush') dataSource: PurpleblushDataSource, @repository.getter('ItemEncomendaRepository') protected itemEncomendaRepositoryGetter: Getter<ItemEncomendaRepository>, @repository.getter('CategoriaRepository') protected categoriaRepositoryGetter: Getter<CategoriaRepository>,
  ) {
    super(Produto, dataSource);
    this.categoria = this.createBelongsToAccessorFor('categoria', categoriaRepositoryGetter,);
    this.registerInclusionResolver('categoria', this.categoria.inclusionResolver);
    this.itemEncomendas = this.createHasManyRepositoryFactoryFor('itemEncomendas', itemEncomendaRepositoryGetter,);
    this.registerInclusionResolver('itemEncomendas', this.itemEncomendas.inclusionResolver);
  }
}
