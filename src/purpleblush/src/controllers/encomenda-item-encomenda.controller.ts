import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Encomenda,
  ItemEncomenda,
} from '../models';
import {EncomendaRepository} from '../repositories';

export class EncomendaItemEncomendaController {
  constructor(
    @repository(EncomendaRepository) protected encomendaRepository: EncomendaRepository,
  ) { }

  @get('/encomendas/{id}/item-encomendas', {
    responses: {
      '200': {
        description: 'Array of Encomenda has many ItemEncomenda',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ItemEncomenda)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ItemEncomenda>,
  ): Promise<ItemEncomenda[]> {
    return this.encomendaRepository.itemEncomendas(id).find(filter);
  }

  @post('/encomendas/{id}/item-encomendas', {
    responses: {
      '200': {
        description: 'Encomenda model instance',
        content: {'application/json': {schema: getModelSchemaRef(ItemEncomenda)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Encomenda.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemEncomenda, {
            title: 'NewItemEncomendaInEncomenda',
            exclude: ['id'],
            optional: ['encomendaId']
          }),
        },
      },
    }) itemEncomenda: Omit<ItemEncomenda, 'id'>,
  ): Promise<ItemEncomenda> {
    return this.encomendaRepository.itemEncomendas(id).create(itemEncomenda);
  }

  @patch('/encomendas/{id}/item-encomendas', {
    responses: {
      '200': {
        description: 'Encomenda.ItemEncomenda PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemEncomenda, {partial: true}),
        },
      },
    })
    itemEncomenda: Partial<ItemEncomenda>,
    @param.query.object('where', getWhereSchemaFor(ItemEncomenda)) where?: Where<ItemEncomenda>,
  ): Promise<Count> {
    return this.encomendaRepository.itemEncomendas(id).patch(itemEncomenda, where);
  }

  @del('/encomendas/{id}/item-encomendas', {
    responses: {
      '200': {
        description: 'Encomenda.ItemEncomenda DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ItemEncomenda)) where?: Where<ItemEncomenda>,
  ): Promise<Count> {
    return this.encomendaRepository.itemEncomendas(id).delete(where);
  }
}
