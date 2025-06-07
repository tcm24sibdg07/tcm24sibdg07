import { DefaultCrudRepository } from '@loopback/repository';
import { PurpleblushDataSource } from '../datasources';
import { Classificacao, ClassificacaoRelations } from '../models';
export declare class ClassificacaoRepository extends DefaultCrudRepository<Classificacao, typeof Classificacao.prototype.id, ClassificacaoRelations> {
    constructor(dataSource: PurpleblushDataSource);
}
