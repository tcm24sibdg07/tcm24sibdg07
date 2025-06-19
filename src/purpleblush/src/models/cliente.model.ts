import {Entity, hasMany, model, property} from '@loopback/repository';
import {Encomenda} from './encomenda.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  morada: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  data_nascimento: string;

  @property({
    type: 'number',
    required: false,
  })
  nif?: number;

  @property({
    type: 'string',
    required: true,
  })
  palavra_passe: string;

  @property({
    type: 'number',
    required: true,
  })
  telemovel: number;

  @hasMany(() => Encomenda)
  encomendas: Encomenda[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
