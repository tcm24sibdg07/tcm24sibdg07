import { DefaultCrudRepository } from '@loopback/repository';
import { PurpleblushDataSource } from '../datasources';
import { Produto, ProdutoRelations } from '../models';
export declare class ProdutoRepository extends DefaultCrudRepository<Produto, typeof Produto.prototype.id, ProdutoRelations> {
    constructor(dataSource: PurpleblushDataSource);
}
