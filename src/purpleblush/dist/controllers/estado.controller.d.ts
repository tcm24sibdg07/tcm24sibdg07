import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Estado } from '../models';
import { EstadoRepository } from '../repositories';
export declare class EstadoController {
    estadoRepository: EstadoRepository;
    constructor(estadoRepository: EstadoRepository);
    create(estado: Estado): Promise<Estado>;
    count(where?: Where<Estado>): Promise<Count>;
    find(filter?: Filter<Estado>): Promise<Estado[]>;
    updateAll(estado: Estado, where?: Where<Estado>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Estado>): Promise<Estado>;
    updateById(id: number, estado: Estado): Promise<void>;
    replaceById(id: number, estado: Estado): Promise<void>;
    deleteById(id: number): Promise<void>;
}
