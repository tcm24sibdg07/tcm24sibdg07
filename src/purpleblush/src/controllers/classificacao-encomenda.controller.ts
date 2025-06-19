import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Classificacao,
  Encomenda,
} from '../models';
import {ClassificacaoRepository} from '../repositories';

export class ClassificacaoEncomendaController {
  constructor(
    @repository(ClassificacaoRepository)
    public classificacaoRepository: ClassificacaoRepository,
  ) { }

  @get('/classificacaos/{id}/encomenda', {
    responses: {
      '200': {
        description: 'Encomenda belonging to Classificacao',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Encomenda),
          },
        },
      },
    },
  })
  async getEncomenda(
    @param.path.number('id') id: typeof Classificacao.prototype.id,
  ): Promise<Encomenda> {
    return this.classificacaoRepository.encomenda(id);
  }
}
