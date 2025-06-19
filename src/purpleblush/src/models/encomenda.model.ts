import {Entity, model, property, belongsTo, hasOne, hasMany} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {Estado} from './estado.model';
import {Classificacao} from './classificacao.model';
import {ItemEncomenda} from './item-encomenda.model';

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

  @belongsTo(() => Cliente)
  clienteId: number;

  @belongsTo(() => Estado)
  estadoId: number;

  @hasOne(() => Classificacao)
  classificacao: Classificacao;

  @hasMany(() => ItemEncomenda)
  itemEncomendas: ItemEncomenda[];

  constructor(data?: Partial<Encomenda>) {
    super(data);
  }
}

export interface EncomendaRelations {
  // describe navigational properties here
}

export type EncomendaWithRelations = Encomenda & EncomendaRelations;
