import { Entity } from '@loopback/repository';
export declare class ItemEncomenda extends Entity {
    preco_unitario: number;
    quantidade: number;
    id?: number;
    constructor(data?: Partial<ItemEncomenda>);
}
export interface ItemEncomendaRelations {
}
export type ItemEncomendaWithRelations = ItemEncomenda & ItemEncomendaRelations;
