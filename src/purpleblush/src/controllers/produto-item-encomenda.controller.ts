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
  Produto,
  ItemEncomenda,
} from '../models';
import {ProdutoRepository} from '../repositories';

export class ProdutoItemEncomendaController {
  constructor(
    @repository(ProdutoRepository) protected produtoRepository: ProdutoRepository,
  ) { }

  @get('/produtos/{id}/item-encomendas', {
    responses: {
      '200': {
        description: 'Array of Produto has many ItemEncomenda',
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
    return this.produtoRepository.itemEncomendas(id).find(filter);
  }

  @post('/produtos/{id}/item-encomendas', {
    responses: {
      '200': {
        description: 'Produto model instance',
        content: {'application/json': {schema: getModelSchemaRef(ItemEncomenda)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Produto.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemEncomenda, {
            title: 'NewItemEncomendaInProduto',
            exclude: ['id'],
            optional: ['produtoId']
          }),
        },
      },
    }) itemEncomenda: Omit<ItemEncomenda, 'id'>,
  ): Promise<ItemEncomenda> {
    return this.produtoRepository.itemEncomendas(id).create(itemEncomenda);
  }

  @patch('/produtos/{id}/item-encomendas', {
    responses: {
      '200': {
        description: 'Produto.ItemEncomenda PATCH success count',
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
    return this.produtoRepository.itemEncomendas(id).patch(itemEncomenda, where);
  }

  @del('/produtos/{id}/item-encomendas', {
    responses: {
      '200': {
        description: 'Produto.ItemEncomenda DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ItemEncomenda)) where?: Where<ItemEncomenda>,
  ): Promise<Count> {
    return this.produtoRepository.itemEncomendas(id).delete(where);
  }
}
