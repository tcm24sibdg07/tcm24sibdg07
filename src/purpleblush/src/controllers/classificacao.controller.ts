import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Classificacao} from '../models';
import {ClassificacaoRepository} from '../repositories';

export class ClassificacaoController {
  constructor(
    @repository(ClassificacaoRepository)
    public classificacaoRepository : ClassificacaoRepository,
  ) {}

  @post('/classificacaos')
  @response(200, {
    description: 'Classificacao model instance',
    content: {'application/json': {schema: getModelSchemaRef(Classificacao)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classificacao, {
            title: 'NewClassificacao',
            exclude: ['id'],
          }),
        },
      },
    })
    classificacao: Omit<Classificacao, 'id'>,
  ): Promise<Classificacao> {
    return this.classificacaoRepository.create(classificacao);
  }

  @get('/classificacaos/count')
  @response(200, {
    description: 'Classificacao model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Classificacao) where?: Where<Classificacao>,
  ): Promise<Count> {
    return this.classificacaoRepository.count(where);
  }

  @get('/classificacaos')
  @response(200, {
    description: 'Array of Classificacao model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Classificacao, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Classificacao) filter?: Filter<Classificacao>,
  ): Promise<Classificacao[]> {
    return this.classificacaoRepository.find(filter);
  }

  @patch('/classificacaos')
  @response(200, {
    description: 'Classificacao PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classificacao, {partial: true}),
        },
      },
    })
    classificacao: Classificacao,
    @param.where(Classificacao) where?: Where<Classificacao>,
  ): Promise<Count> {
    return this.classificacaoRepository.updateAll(classificacao, where);
  }

  @get('/classificacaos/{id}')
  @response(200, {
    description: 'Classificacao model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Classificacao, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Classificacao, {exclude: 'where'}) filter?: FilterExcludingWhere<Classificacao>
  ): Promise<Classificacao> {
    return this.classificacaoRepository.findById(id, filter);
  }

  @patch('/classificacaos/{id}')
  @response(204, {
    description: 'Classificacao PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classificacao, {partial: true}),
        },
      },
    })
    classificacao: Classificacao,
  ): Promise<void> {
    await this.classificacaoRepository.updateById(id, classificacao);
  }

  @put('/classificacaos/{id}')
  @response(204, {
    description: 'Classificacao PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() classificacao: Classificacao,
  ): Promise<void> {
    await this.classificacaoRepository.replaceById(id, classificacao);
  }

  @del('/classificacaos/{id}')
  @response(204, {
    description: 'Classificacao DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.classificacaoRepository.deleteById(id);
  }
}
