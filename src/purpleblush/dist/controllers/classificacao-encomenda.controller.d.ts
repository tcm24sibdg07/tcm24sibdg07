import { Classificacao, Encomenda } from '../models';
import { ClassificacaoRepository } from '../repositories';
export declare class ClassificacaoEncomendaController {
    classificacaoRepository: ClassificacaoRepository;
    constructor(classificacaoRepository: ClassificacaoRepository);
    getEncomenda(id: typeof Classificacao.prototype.id): Promise<Encomenda>;
}
