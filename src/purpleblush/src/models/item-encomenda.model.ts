import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Encomenda} from './encomenda.model';
import {Produto} from './produto.model';

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

  @belongsTo(() => Encomenda)
  encomendaId: number;

  @belongsTo(() => Produto)
  produtoId: number;

  constructor(data?: Partial<ItemEncomenda>) {
    super(data);
  }
}

export interface ItemEncomendaRelations {
  // describe navigational properties here
}

export type ItemEncomendaWithRelations = ItemEncomenda & ItemEncomendaRelations;
