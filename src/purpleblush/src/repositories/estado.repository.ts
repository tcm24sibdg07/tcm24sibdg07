import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PurpleblushDataSource} from '../datasources';
import {Estado, EstadoRelations, Encomenda} from '../models';
import {EncomendaRepository} from './encomenda.repository';

export class EstadoRepository extends DefaultCrudRepository<
  Estado,
  typeof Estado.prototype.id,
  EstadoRelations
> {

  public readonly encomendas: HasManyRepositoryFactory<Encomenda, typeof Estado.prototype.id>;

  constructor(
    @inject('datasources.purpleblush') dataSource: PurpleblushDataSource, @repository.getter('EncomendaRepository') protected encomendaRepositoryGetter: Getter<EncomendaRepository>,
  ) {
    super(Estado, dataSource);
    this.encomendas = this.createHasManyRepositoryFactoryFor('encomendas', encomendaRepositoryGetter,);
    this.registerInclusionResolver('encomendas', this.encomendas.inclusionResolver);
  }
}
