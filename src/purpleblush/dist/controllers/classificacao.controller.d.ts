import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Classificacao } from '../models';
import { ClassificacaoRepository } from '../repositories';
export declare class ClassificacaoController {
    classificacaoRepository: ClassificacaoRepository;
    constructor(classificacaoRepository: ClassificacaoRepository);
    create(classificacao: Omit<Classificacao, 'id'>): Promise<Classificacao>;
    count(where?: Where<Classificacao>): Promise<Count>;
    find(filter?: Filter<Classificacao>): Promise<Classificacao[]>;
    updateAll(classificacao: Classificacao, where?: Where<Classificacao>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Classificacao>): Promise<Classificacao>;
    updateById(id: number, classificacao: Classificacao): Promise<void>;
    replaceById(id: number, classificacao: Classificacao): Promise<void>;
    deleteById(id: number): Promise<void>;
}
