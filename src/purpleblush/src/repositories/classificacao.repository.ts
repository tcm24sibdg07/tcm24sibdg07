import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {PurpleblushDataSource} from '../datasources';
import {Classificacao, ClassificacaoRelations, Encomenda} from '../models';
import {EncomendaRepository} from './encomenda.repository';

export class ClassificacaoRepository extends DefaultCrudRepository<
  Classificacao,
  typeof Classificacao.prototype.id,
  ClassificacaoRelations
> {

  public readonly encomenda: BelongsToAccessor<Encomenda, typeof Classificacao.prototype.id>;

  constructor(
    @inject('datasources.purpleblush') dataSource: PurpleblushDataSource, @repository.getter('EncomendaRepository') protected encomendaRepositoryGetter: Getter<EncomendaRepository>,
  ) {
    super(Classificacao, dataSource);
    this.encomenda = this.createBelongsToAccessorFor('encomenda', encomendaRepositoryGetter,);
    this.registerInclusionResolver('encomenda', this.encomenda.inclusionResolver);
  }
}
