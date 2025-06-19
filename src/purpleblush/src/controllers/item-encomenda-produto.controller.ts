import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ItemEncomenda,
  Produto,
} from '../models';
import {ItemEncomendaRepository} from '../repositories';

export class ItemEncomendaProdutoController {
  constructor(
    @repository(ItemEncomendaRepository)
    public itemEncomendaRepository: ItemEncomendaRepository,
  ) { }

  @get('/item-encomendas/{id}/produto', {
    responses: {
      '200': {
        description: 'Produto belonging to ItemEncomenda',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Produto),
          },
        },
      },
    },
  })
  async getProduto(
    @param.path.number('id') id: typeof ItemEncomenda.prototype.id,
  ): Promise<Produto> {
    return this.itemEncomendaRepository.produto(id);
  }
}
