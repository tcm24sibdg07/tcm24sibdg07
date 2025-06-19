import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {PurpleblushDataSource} from '../datasources';
import {Encomenda, EncomendaRelations, Cliente, Estado, Classificacao, ItemEncomenda} from '../models';
import {ClienteRepository} from './cliente.repository';
import {EstadoRepository} from './estado.repository';
import {ClassificacaoRepository} from './classificacao.repository';
import {ItemEncomendaRepository} from './item-encomenda.repository';

export class EncomendaRepository extends DefaultCrudRepository<
  Encomenda,
  typeof Encomenda.prototype.id,
  EncomendaRelations
> {

  public readonly cliente: BelongsToAccessor<Cliente, typeof Encomenda.prototype.id>;

  public readonly estado: BelongsToAccessor<Estado, typeof Encomenda.prototype.id>;

  public readonly classificacao: HasOneRepositoryFactory<Classificacao, typeof Encomenda.prototype.id>;

  public readonly itemEncomendas: HasManyRepositoryFactory<ItemEncomenda, typeof Encomenda.prototype.id>;

  constructor(
    @inject('datasources.purpleblush') dataSource: PurpleblushDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('EstadoRepository') protected estadoRepositoryGetter: Getter<EstadoRepository>, @repository.getter('ClassificacaoRepository') protected classificacaoRepositoryGetter: Getter<ClassificacaoRepository>, @repository.getter('ItemEncomendaRepository') protected itemEncomendaRepositoryGetter: Getter<ItemEncomendaRepository>,
  ) {
    super(Encomenda, dataSource);
    this.itemEncomendas = this.createHasManyRepositoryFactoryFor('itemEncomendas', itemEncomendaRepositoryGetter,);
    this.registerInclusionResolver('itemEncomendas', this.itemEncomendas.inclusionResolver);
    this.classificacao = this.createHasOneRepositoryFactoryFor('classificacao', classificacaoRepositoryGetter);
    this.registerInclusionResolver('classificacao', this.classificacao.inclusionResolver);
    this.estado = this.createBelongsToAccessorFor('estado', estadoRepositoryGetter,);
    this.registerInclusionResolver('estado', this.estado.inclusionResolver);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
  }
}
