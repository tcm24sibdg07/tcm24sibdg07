import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Produto,
  Categoria,
} from '../models';
import {ProdutoRepository} from '../repositories';

export class ProdutoCategoriaController {
  constructor(
    @repository(ProdutoRepository)
    public produtoRepository: ProdutoRepository,
  ) { }

  @get('/produtos/{id}/categoria', {
    responses: {
      '200': {
        description: 'Categoria belonging to Produto',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Categoria),
          },
        },
      },
    },
  })
  async getCategoria(
    @param.path.number('id') id: typeof Produto.prototype.id,
  ): Promise<Categoria> {
    return this.produtoRepository.categoria(id);
  }
}
