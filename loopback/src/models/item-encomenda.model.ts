import {Entity, model, property} from '@loopback/repository';

@model()
export class ItemEncomenda extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  preco_unitario: number;

  @property({
    type: 'number',
    required: true,
  })
  quantidade: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<ItemEncomenda>) {
    super(data);
  }
}

export interface ItemEncomendaRelations {
  // describe navigational properties here
}

export type ItemEncomendaWithRelations = ItemEncomenda & ItemEncomendaRelations;
