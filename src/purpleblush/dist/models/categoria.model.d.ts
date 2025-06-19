import { Entity } from '@loopback/repository';
import { Produto } from './produto.model';
export declare class Categoria extends Entity {
    id?: number;
    nome: string;
    produtos: Produto[];
    constructor(data?: Partial<Categoria>);
}
export interface CategoriaRelations {
}
export type CategoriaWithRelations = Categoria & CategoriaRelations;
