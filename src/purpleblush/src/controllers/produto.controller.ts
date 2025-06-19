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
import {Produto} from '../models';
import {ProdutoRepository} from '../repositories';

export class ProdutoController {
  constructor(
    @repository(ProdutoRepository)
    public produtoRepository : ProdutoRepository,
  ) {}

  @post('/produtos')
  @response(200, {
    description: 'Produto model instance',
    content: {'application/json': {schema: getModelSchemaRef(Produto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produto, {
            title: 'NewProduto',
            exclude: ['id'],
          }),
        },
      },
    })
    produto: Omit<Produto, 'id'>,
  ): Promise<Produto> {
    return this.produtoRepository.create(produto);
  }

  @get('/produtos/count')
  @response(200, {
    description: 'Produto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Produto) where?: Where<Produto>,
  ): Promise<Count> {
    return this.produtoRepository.count(where);
  }

  @get('/produtos')
  @response(200, {
    description: 'Array of Produto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Produto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Produto) filter?: Filter<Produto>,
  ): Promise<Produto[]> {
    return this.produtoRepository.find(filter);
  }

  @patch('/produtos')
  @response(200, {
    description: 'Produto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produto, {partial: true}),
        },
      },
    })
    produto: Produto,
    @param.where(Produto) where?: Where<Produto>,
  ): Promise<Count> {
    return this.produtoRepository.updateAll(produto, where);
  }

  @get('/produtos/{id}')
  @response(200, {
    description: 'Produto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Produto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Produto, {exclude: 'where'}) filter?: FilterExcludingWhere<Produto>
  ): Promise<Produto> {
    return this.produtoRepository.findById(id, filter);
  }

  @patch('/produtos/{id}')
  @response(204, {
    description: 'Produto PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produto, {partial: true}),
        },
      },
    })
    produto: Produto,
  ): Promise<void> {
    await this.produtoRepository.updateById(id, produto);
  }

  @put('/produtos/{id}')
  @response(204, {
    description: 'Produto PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() produto: Produto,
  ): Promise<void> {
    await this.produtoRepository.replaceById(id, produto);
  }

  @del('/produtos/{id}')
  @response(204, {
    description: 'Produto DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.produtoRepository.deleteById(id);
  }
}
