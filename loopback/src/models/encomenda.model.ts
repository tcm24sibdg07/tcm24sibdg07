import {Entity, model, property} from '@loopback/repository';

@model()
export class Encomenda extends Entity {
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
  data: string;

  @property({
    type: 'string',
    required: true,
  })
  metodo_pagamento: string;

  @property({
    type: 'string',
  })
  observacao?: string;

  @property({
    type: 'number',
  })
  valor_total?: number;


  constructor(data?: Partial<Encomenda>) {
    super(data);
  }
}

export interface EncomendaRelations {
  // describe navigational properties here
}

export type EncomendaWithRelations = Encomenda & EncomendaRelations;
