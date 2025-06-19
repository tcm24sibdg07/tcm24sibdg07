import { Entity } from '@loopback/repository';
import { Encomenda } from './encomenda.model';
export declare class Estado extends Entity {
    id?: number;
    nome: string;
    encomendas: Encomenda[];
    constructor(data?: Partial<Estado>);
}
export interface EstadoRelations {
}
export type EstadoWithRelations = Estado & EstadoRelations;
