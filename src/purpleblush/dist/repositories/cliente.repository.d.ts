import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { PurpleblushDataSource } from '../datasources';
import { Cliente, ClienteRelations, Encomenda } from '../models';
import { EncomendaRepository } from './encomenda.repository';
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.id, ClienteRelations> {
    protected encomendaRepositoryGetter: Getter<EncomendaRepository>;
    readonly encomendas: HasManyRepositoryFactory<Encomenda, typeof Cliente.prototype.id>;
    constructor(dataSource: PurpleblushDataSource, encomendaRepositoryGetter: Getter<EncomendaRepository>);
}
