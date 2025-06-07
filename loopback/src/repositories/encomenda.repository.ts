import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PurpleblushDataSource} from '../datasources';
import {Encomenda, EncomendaRelations} from '../models';

export class EncomendaRepository extends DefaultCrudRepository<
  Encomenda,
  typeof Encomenda.prototype.id,
  EncomendaRelations
> {
  constructor(
    @inject('datasources.purpleblush') dataSource: PurpleblushDataSource,
  ) {
    super(Encomenda, dataSource);
  }
}
