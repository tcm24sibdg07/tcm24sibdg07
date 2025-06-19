import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { PurpleblushDataSource } from '../datasources';
import { Classificacao, ClassificacaoRelations, Encomenda } from '../models';
import { EncomendaRepository } from './encomenda.repository';
export declare class ClassificacaoRepository extends DefaultCrudRepository<Classificacao, typeof Classificacao.prototype.id, ClassificacaoRelations> {
    protected encomendaRepositoryGetter: Getter<EncomendaRepository>;
    readonly encomenda: BelongsToAccessor<Encomenda, typeof Classificacao.prototype.id>;
    constructor(dataSource: PurpleblushDataSource, encomendaRepositoryGetter: Getter<EncomendaRepository>);
}
