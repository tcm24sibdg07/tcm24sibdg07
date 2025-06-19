import { Count, Filter, Where } from '@loopback/repository';
import { Encomenda, Classificacao } from '../models';
import { EncomendaRepository } from '../repositories';
export declare class EncomendaClassificacaoController {
    protected encomendaRepository: EncomendaRepository;
    constructor(encomendaRepository: EncomendaRepository);
    get(id: number, filter?: Filter<Classificacao>): Promise<Classificacao>;
    create(id: typeof Encomenda.prototype.id, classificacao: Omit<Classificacao, 'id'>): Promise<Classificacao>;
    patch(id: number, classificacao: Partial<Classificacao>, where?: Where<Classificacao>): Promise<Count>;
    delete(id: number, where?: Where<Classificacao>): Promise<Count>;
}
