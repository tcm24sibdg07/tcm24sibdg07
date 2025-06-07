import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PurpleblushDataSource} from '../datasources';
import {Classificacao, ClassificacaoRelations} from '../models';

export class ClassificacaoRepository extends DefaultCrudRepository<
  Classificacao,
  typeof Classificacao.prototype.id,
  ClassificacaoRelations
> {
  constructor(
    @inject('datasources.purpleblush') dataSource: PurpleblushDataSource,
  ) {
    super(Classificacao, dataSource);
  }
}
