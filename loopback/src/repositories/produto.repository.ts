import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PurpleblushDataSource} from '../datasources';
import {Produto, ProdutoRelations} from '../models';

export class ProdutoRepository extends DefaultCrudRepository<
  Produto,
  typeof Produto.prototype.id,
  ProdutoRelations
> {
  constructor(
    @inject('datasources.purpleblush') dataSource: PurpleblushDataSource,
  ) {
    super(Produto, dataSource);
  }
}
