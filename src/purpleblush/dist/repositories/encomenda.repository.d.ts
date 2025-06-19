import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasOneRepositoryFactory, HasManyRepositoryFactory } from '@loopback/repository';
import { PurpleblushDataSource } from '../datasources';
import { Encomenda, EncomendaRelations, Cliente, Estado, Classificacao, ItemEncomenda } from '../models';
import { ClienteRepository } from './cliente.repository';
import { EstadoRepository } from './estado.repository';
import { ClassificacaoRepository } from './classificacao.repository';
import { ItemEncomendaRepository } from './item-encomenda.repository';
export declare class EncomendaRepository extends DefaultCrudRepository<Encomenda, typeof Encomenda.prototype.id, EncomendaRelations> {
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    protected estadoRepositoryGetter: Getter<EstadoRepository>;
    protected classificacaoRepositoryGetter: Getter<ClassificacaoRepository>;
    protected itemEncomendaRepositoryGetter: Getter<ItemEncomendaRepository>;
    readonly cliente: BelongsToAccessor<Cliente, typeof Encomenda.prototype.id>;
    readonly estado: BelongsToAccessor<Estado, typeof Encomenda.prototype.id>;
    readonly classificacao: HasOneRepositoryFactory<Classificacao, typeof Encomenda.prototype.id>;
    readonly itemEncomendas: HasManyRepositoryFactory<ItemEncomenda, typeof Encomenda.prototype.id>;
    constructor(dataSource: PurpleblushDataSource, clienteRepositoryGetter: Getter<ClienteRepository>, estadoRepositoryGetter: Getter<EstadoRepository>, classificacaoRepositoryGetter: Getter<ClassificacaoRepository>, itemEncomendaRepositoryGetter: Getter<ItemEncomendaRepository>);
}
