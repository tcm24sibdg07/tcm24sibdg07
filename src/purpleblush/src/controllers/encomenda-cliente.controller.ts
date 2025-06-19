import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Encomenda,
  Cliente,
} from '../models';
import {EncomendaRepository} from '../repositories';

export class EncomendaClienteController {
  constructor(
    @repository(EncomendaRepository)
    public encomendaRepository: EncomendaRepository,
  ) { }

  @get('/encomendas/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to Encomenda',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Cliente),
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.number('id') id: typeof Encomenda.prototype.id,
  ): Promise<Cliente> {
    return this.encomendaRepository.cliente(id);
  }
}
