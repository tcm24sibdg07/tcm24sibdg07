import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PurpleblushDataSource} from '../datasources';
import {ItemEncomenda, ItemEncomendaRelations} from '../models';

export class ItemEncomendaRepository extends DefaultCrudRepository<
  ItemEncomenda,
  typeof ItemEncomenda.prototype.id,
  ItemEncomendaRelations
> {
  constructor(
    @inject('datasources.purpleblush') dataSource: PurpleblushDataSource,
  ) {
    super(ItemEncomenda, dataSource);
  }
}
