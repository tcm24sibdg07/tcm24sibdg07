import { Entity } from '@loopback/repository';
export declare class Cliente extends Entity {
    id?: number;
    nome: string;
    morada: string;
    email: string;
    data_nascimento: string;
    nif?: number;
    palavra_passe: string;
    telemovel: number;
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export type ClienteWithRelations = Cliente & ClienteRelations;
