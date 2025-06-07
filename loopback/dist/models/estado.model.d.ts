import { Entity } from '@loopback/repository';
export declare class Estado extends Entity {
    id?: number;
    nome: string;
    constructor(data?: Partial<Estado>);
}
export interface EstadoRelations {
}
export type EstadoWithRelations = Estado & EstadoRelations;
