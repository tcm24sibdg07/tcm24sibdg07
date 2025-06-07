import { Entity } from '@loopback/repository';
export declare class Encomenda extends Entity {
    id?: number;
    data: string;
    metodo_pagamento: string;
    observacao?: string;
    valor_total?: number;
    constructor(data?: Partial<Encomenda>);
}
export interface EncomendaRelations {
}
export type EncomendaWithRelations = Encomenda & EncomendaRelations;
