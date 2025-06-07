import { Entity } from '@loopback/repository';
export declare class Categoria extends Entity {
    id?: number;
    nome: string;
    constructor(data?: Partial<Categoria>);
}
export interface CategoriaRelations {
}
export type CategoriaWithRelations = Categoria & CategoriaRelations;
