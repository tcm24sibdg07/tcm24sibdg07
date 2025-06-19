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
  Encomenda,
} from '../models';
import {ItemEncomendaRepository} from '../repositories';

export class ItemEncomendaEncomendaController {
  constructor(
    @repository(ItemEncomendaRepository)
    public itemEncomendaRepository: ItemEncomendaRepository,
  ) { }

  @get('/item-encomendas/{id}/encomenda', {
    responses: {
      '200': {
        description: 'Encomenda belonging to ItemEncomenda',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Encomenda),
          },
        },
      },
    },
  })
  async getEncomenda(
    @param.path.number('id') id: typeof ItemEncomenda.prototype.id,
  ): Promise<Encomenda> {
    return this.itemEncomendaRepository.encomenda(id);
  }
}
