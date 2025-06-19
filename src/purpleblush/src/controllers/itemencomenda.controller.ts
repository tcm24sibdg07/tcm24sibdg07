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
import {ItemEncomenda} from '../models';
import {ItemEncomendaRepository} from '../repositories';

export class ItemencomendaController {
  constructor(
    @repository(ItemEncomendaRepository)
    public itemEncomendaRepository : ItemEncomendaRepository,
  ) {}

  @post('/item-encomendas')
  @response(200, {
    description: 'ItemEncomenda model instance',
    content: {'application/json': {schema: getModelSchemaRef(ItemEncomenda)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemEncomenda, {
            title: 'NewItemEncomenda',
            
          }),
        },
      },
    })
    itemEncomenda: ItemEncomenda,
  ): Promise<ItemEncomenda> {
    return this.itemEncomendaRepository.create(itemEncomenda);
  }

  @get('/item-encomendas/count')
  @response(200, {
    description: 'ItemEncomenda model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ItemEncomenda) where?: Where<ItemEncomenda>,
  ): Promise<Count> {
    return this.itemEncomendaRepository.count(where);
  }

  @get('/item-encomendas')
  @response(200, {
    description: 'Array of ItemEncomenda model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ItemEncomenda, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ItemEncomenda) filter?: Filter<ItemEncomenda>,
  ): Promise<ItemEncomenda[]> {
    return this.itemEncomendaRepository.find(filter);
  }

  @patch('/item-encomendas')
  @response(200, {
    description: 'ItemEncomenda PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemEncomenda, {partial: true}),
        },
      },
    })
    itemEncomenda: ItemEncomenda,
    @param.where(ItemEncomenda) where?: Where<ItemEncomenda>,
  ): Promise<Count> {
    return this.itemEncomendaRepository.updateAll(itemEncomenda, where);
  }

  @get('/item-encomendas/{id}')
  @response(200, {
    description: 'ItemEncomenda model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ItemEncomenda, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ItemEncomenda, {exclude: 'where'}) filter?: FilterExcludingWhere<ItemEncomenda>
  ): Promise<ItemEncomenda> {
    return this.itemEncomendaRepository.findById(id, filter);
  }

  @patch('/item-encomendas/{id}')
  @response(204, {
    description: 'ItemEncomenda PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemEncomenda, {partial: true}),
        },
      },
    })
    itemEncomenda: ItemEncomenda,
  ): Promise<void> {
    await this.itemEncomendaRepository.updateById(id, itemEncomenda);
  }

  @put('/item-encomendas/{id}')
  @response(204, {
    description: 'ItemEncomenda PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() itemEncomenda: ItemEncomenda,
  ): Promise<void> {
    await this.itemEncomendaRepository.replaceById(id, itemEncomenda);
  }

  @del('/item-encomendas/{id}')
  @response(204, {
    description: 'ItemEncomenda DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.itemEncomendaRepository.deleteById(id);
  }
}
