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
  Classificacao,
} from '../models';
import {EncomendaRepository} from '../repositories';

export class EncomendaClassificacaoController {
  constructor(
    @repository(EncomendaRepository) protected encomendaRepository: EncomendaRepository,
  ) { }

  @get('/encomendas/{id}/classificacao', {
    responses: {
      '200': {
        description: 'Encomenda has one Classificacao',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Classificacao),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Classificacao>,
  ): Promise<Classificacao> {
    return this.encomendaRepository.classificacao(id).get(filter);
  }

  @post('/encomendas/{id}/classificacao', {
    responses: {
      '200': {
        description: 'Encomenda model instance',
        content: {'application/json': {schema: getModelSchemaRef(Classificacao)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Encomenda.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classificacao, {
            title: 'NewClassificacaoInEncomenda',
            exclude: ['id'],
            optional: ['encomendaId']
          }),
        },
      },
    }) classificacao: Omit<Classificacao, 'id'>,
  ): Promise<Classificacao> {
    return this.encomendaRepository.classificacao(id).create(classificacao);
  }

  @patch('/encomendas/{id}/classificacao', {
    responses: {
      '200': {
        description: 'Encomenda.Classificacao PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classificacao, {partial: true}),
        },
      },
    })
    classificacao: Partial<Classificacao>,
    @param.query.object('where', getWhereSchemaFor(Classificacao)) where?: Where<Classificacao>,
  ): Promise<Count> {
    return this.encomendaRepository.classificacao(id).patch(classificacao, where);
  }

  @del('/encomendas/{id}/classificacao', {
    responses: {
      '200': {
        description: 'Encomenda.Classificacao DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Classificacao)) where?: Where<Classificacao>,
  ): Promise<Count> {
    return this.encomendaRepository.classificacao(id).delete(where);
  }
}
