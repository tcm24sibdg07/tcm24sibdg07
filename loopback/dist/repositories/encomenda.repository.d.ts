import { DefaultCrudRepository } from '@loopback/repository';
import { PurpleblushDataSource } from '../datasources';
import { Encomenda, EncomendaRelations } from '../models';
export declare class EncomendaRepository extends DefaultCrudRepository<Encomenda, typeof Encomenda.prototype.id, EncomendaRelations> {
    constructor(dataSource: PurpleblushDataSource);
}
