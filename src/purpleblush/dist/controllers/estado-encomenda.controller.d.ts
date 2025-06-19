import { Count, Filter, Where } from '@loopback/repository';
import { Estado, Encomenda } from '../models';
import { EstadoRepository } from '../repositories';
export declare class EstadoEncomendaController {
    protected estadoRepository: EstadoRepository;
    constructor(estadoRepository: EstadoRepository);
    find(id: number, filter?: Filter<Encomenda>): Promise<Encomenda[]>;
    create(id: typeof Estado.prototype.id, encomenda: Omit<Encomenda, 'id'>): Promise<Encomenda>;
    patch(id: number, encomenda: Partial<Encomenda>, where?: Where<Encomenda>): Promise<Count>;
    delete(id: number, where?: Where<Encomenda>): Promise<Count>;
}
