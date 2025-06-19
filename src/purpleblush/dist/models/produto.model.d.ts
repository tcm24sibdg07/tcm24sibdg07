import { Entity } from '@loopback/repository';
import { ItemEncomenda } from './item-encomenda.model';
export declare class Produto extends Entity {
    id?: number;
    stock: number;
    nome: string;
    preco: number;
    descricao?: string;
    itemEncomendas: ItemEncomenda[];
    categoriaId: number;
    constructor(data?: Partial<Produto>);
}
export interface ProdutoRelations {
}
export type ProdutoWithRelations = Produto & ProdutoRelations;
