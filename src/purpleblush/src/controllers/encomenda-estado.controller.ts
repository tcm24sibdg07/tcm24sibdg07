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
  Estado,
} from '../models';
import {EncomendaRepository} from '../repositories';

export class EncomendaEstadoController {
  constructor(
    @repository(EncomendaRepository)
    public encomendaRepository: EncomendaRepository,
  ) { }

  @get('/encomendas/{id}/estado', {
    responses: {
      '200': {
        description: 'Estado belonging to Encomenda',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Estado),
          },
        },
      },
    },
  })
  async getEstado(
    @param.path.number('id') id: typeof Encomenda.prototype.id,
  ): Promise<Estado> {
    return this.encomendaRepository.estado(id);
  }
}
