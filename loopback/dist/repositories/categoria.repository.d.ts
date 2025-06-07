import { DefaultCrudRepository } from '@loopback/repository';
import { PurpleblushDataSource } from '../datasources';
import { Categoria, CategoriaRelations } from '../models';
export declare class CategoriaRepository extends DefaultCrudRepository<Categoria, typeof Categoria.prototype.id, CategoriaRelations> {
    constructor(dataSource: PurpleblushDataSource);
}
