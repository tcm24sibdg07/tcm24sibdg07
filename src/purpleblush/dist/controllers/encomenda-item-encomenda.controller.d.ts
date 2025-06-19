import { Count, Filter, Where } from '@loopback/repository';
import { Encomenda, ItemEncomenda } from '../models';
import { EncomendaRepository } from '../repositories';
export declare class EncomendaItemEncomendaController {
    protected encomendaRepository: EncomendaRepository;
    constructor(encomendaRepository: EncomendaRepository);
    find(id: number, filter?: Filter<ItemEncomenda>): Promise<ItemEncomenda[]>;
    create(id: typeof Encomenda.prototype.id, itemEncomenda: Omit<ItemEncomenda, 'id'>): Promise<ItemEncomenda>;
    patch(id: number, itemEncomenda: Partial<ItemEncomenda>, where?: Where<ItemEncomenda>): Promise<Count>;
    delete(id: number, where?: Where<ItemEncomenda>): Promise<Count>;
}
