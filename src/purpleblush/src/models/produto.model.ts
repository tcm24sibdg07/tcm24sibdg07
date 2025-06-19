import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {ItemEncomenda} from './item-encomenda.model';
import {Categoria} from './categoria.model';

@model()
export class Produto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  stock: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    required: true,
  })
  preco: number;

  @property({
    type: 'string',
  })
  descricao?: string;

  @hasMany(() => ItemEncomenda)
  itemEncomendas: ItemEncomenda[];

  @belongsTo(() => Categoria)
  categoriaId: number;

  constructor(data?: Partial<Produto>) {
    super(data);
  }
}

export interface ProdutoRelations {
  // describe navigational properties here
}

export type ProdutoWithRelations = Produto & ProdutoRelations;
