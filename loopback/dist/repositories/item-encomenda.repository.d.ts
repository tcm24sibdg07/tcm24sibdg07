import { DefaultCrudRepository } from '@loopback/repository';
import { PurpleblushDataSource } from '../datasources';
import { ItemEncomenda, ItemEncomendaRelations } from '../models';
export declare class ItemEncomendaRepository extends DefaultCrudRepository<ItemEncomenda, typeof ItemEncomenda.prototype.id, ItemEncomendaRelations> {
    constructor(dataSource: PurpleblushDataSource);
}
