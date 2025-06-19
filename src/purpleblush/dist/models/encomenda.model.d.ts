import { Entity } from '@loopback/repository';
import { Classificacao } from './classificacao.model';
import { ItemEncomenda } from './item-encomenda.model';
export declare class Encomenda extends Entity {
    id?: number;
    data: string;
    metodo_pagamento: string;
    observacao?: string;
    valor_total?: number;
    clienteId: number;
    estadoId: number;
    classificacao: Classificacao;
    itemEncomendas: ItemEncomenda[];
    constructor(data?: Partial<Encomenda>);
}
export interface EncomendaRelations {
}
export type EncomendaWithRelations = Encomenda & EncomendaRelations;
