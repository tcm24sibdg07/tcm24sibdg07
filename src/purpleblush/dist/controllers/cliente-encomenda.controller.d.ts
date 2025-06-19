import { Count, Filter, Where } from '@loopback/repository';
import { Cliente, Encomenda } from '../models';
import { ClienteRepository } from '../repositories';
export declare class ClienteEncomendaController {
    protected clienteRepository: ClienteRepository;
    constructor(clienteRepository: ClienteRepository);
    find(id: number, filter?: Filter<Encomenda>): Promise<Encomenda[]>;
    create(id: typeof Cliente.prototype.id, encomenda: Omit<Encomenda, 'id'>): Promise<Encomenda>;
    patch(id: number, encomenda: Partial<Encomenda>, where?: Where<Encomenda>): Promise<Count>;
    delete(id: number, where?: Where<Encomenda>): Promise<Count>;
}
