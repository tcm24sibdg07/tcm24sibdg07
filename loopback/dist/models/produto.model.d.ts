import { Entity } from '@loopback/repository';
export declare class Produto extends Entity {
    id?: number;
    stock: number;
    nome: string;
    preco: number;
    descricao?: string;
    constructor(data?: Partial<Produto>);
}
export interface ProdutoRelations {
}
export type ProdutoWithRelations = Produto & ProdutoRelations;
