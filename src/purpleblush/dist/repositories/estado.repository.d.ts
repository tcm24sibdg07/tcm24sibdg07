import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { PurpleblushDataSource } from '../datasources';
import { Estado, EstadoRelations, Encomenda } from '../models';
import { EncomendaRepository } from './encomenda.repository';
export declare class EstadoRepository extends DefaultCrudRepository<Estado, typeof Estado.prototype.id, EstadoRelations> {
    protected encomendaRepositoryGetter: Getter<EncomendaRepository>;
    readonly encomendas: HasManyRepositoryFactory<Encomenda, typeof Estado.prototype.id>;
    constructor(dataSource: PurpleblushDataSource, encomendaRepositoryGetter: Getter<EncomendaRepository>);
}
