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
  Estado,
  Encomenda,
} from '../models';
import {EstadoRepository} from '../repositories';

export class EstadoEncomendaController {
  constructor(
    @repository(EstadoRepository) protected estadoRepository: EstadoRepository,
  ) { }

  @get('/estados/{id}/encomendas', {
    responses: {
      '200': {
        description: 'Array of Estado has many Encomenda',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Encomenda)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Encomenda>,
  ): Promise<Encomenda[]> {
    return this.estadoRepository.encomendas(id).find(filter);
  }

  @post('/estados/{id}/encomendas', {
    responses: {
      '200': {
        description: 'Estado model instance',
        content: {'application/json': {schema: getModelSchemaRef(Encomenda)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Estado.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encomenda, {
            title: 'NewEncomendaInEstado',
            exclude: ['id'],
            optional: ['estadoId']
          }),
        },
      },
    }) encomenda: Omit<Encomenda, 'id'>,
  ): Promise<Encomenda> {
    return this.estadoRepository.encomendas(id).create(encomenda);
  }

  @patch('/estados/{id}/encomendas', {
    responses: {
      '200': {
        description: 'Estado.Encomenda PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encomenda, {partial: true}),
        },
      },
    })
    encomenda: Partial<Encomenda>,
    @param.query.object('where', getWhereSchemaFor(Encomenda)) where?: Where<Encomenda>,
  ): Promise<Count> {
    return this.estadoRepository.encomendas(id).patch(encomenda, where);
  }

  @del('/estados/{id}/encomendas', {
    responses: {
      '200': {
        description: 'Estado.Encomenda DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Encomenda)) where?: Where<Encomenda>,
  ): Promise<Count> {
    return this.estadoRepository.encomendas(id).delete(where);
  }
}
