import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Encomenda } from '../models';
import { EncomendaRepository } from '../repositories';
export declare class EncomendaController {
    encomendaRepository: EncomendaRepository;
    constructor(encomendaRepository: EncomendaRepository);
    create(encomenda: Omit<Encomenda, 'id'>): Promise<Encomenda>;
    count(where?: Where<Encomenda>): Promise<Count>;
    find(filter?: Filter<Encomenda>): Promise<Encomenda[]>;
    updateAll(encomenda: Encomenda, where?: Where<Encomenda>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Encomenda>): Promise<Encomenda>;
    updateById(id: number, encomenda: Encomenda): Promise<void>;
    replaceById(id: number, encomenda: Encomenda): Promise<void>;
    deleteById(id: number): Promise<void>;
}
