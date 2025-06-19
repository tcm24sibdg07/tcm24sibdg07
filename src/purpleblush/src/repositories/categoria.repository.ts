import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PurpleblushDataSource} from '../datasources';
import {Categoria, CategoriaRelations, Produto} from '../models';
import {ProdutoRepository} from './produto.repository';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.id,
  CategoriaRelations
> {

  public readonly produtos: HasManyRepositoryFactory<Produto, typeof Categoria.prototype.id>;

  constructor(
    @inject('datasources.purpleblush') dataSource: PurpleblushDataSource, @repository.getter('ProdutoRepository') protected produtoRepositoryGetter: Getter<ProdutoRepository>,
  ) {
    super(Categoria, dataSource);
    this.produtos = this.createHasManyRepositoryFactoryFor('produtos', produtoRepositoryGetter,);
    this.registerInclusionResolver('produtos', this.produtos.inclusionResolver);
  }
}
