import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Encomenda} from './encomenda.model';

@model()
export class Classificacao extends Entity {
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
  estrelas: number;

  @property({
    type: 'string',
  })
  comentario?: string;

  @property({
    type: 'string',
    required: true,
  })
  data: string;

  @belongsTo(() => Encomenda)
  encomendaId: number;

  constructor(data?: Partial<Classificacao>) {
    super(data);
  }
}

export interface ClassificacaoRelations {
  // describe navigational properties here
}

export type ClassificacaoWithRelations = Classificacao & ClassificacaoRelations;
