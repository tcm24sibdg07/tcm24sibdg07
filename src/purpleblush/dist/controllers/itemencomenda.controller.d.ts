import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ItemEncomenda } from '../models';
import { ItemEncomendaRepository } from '../repositories';
export declare class ItemencomendaController {
    itemEncomendaRepository: ItemEncomendaRepository;
    constructor(itemEncomendaRepository: ItemEncomendaRepository);
    create(itemEncomenda: ItemEncomenda): Promise<ItemEncomenda>;
    count(where?: Where<ItemEncomenda>): Promise<Count>;
    find(filter?: Filter<ItemEncomenda>): Promise<ItemEncomenda[]>;
    updateAll(itemEncomenda: ItemEncomenda, where?: Where<ItemEncomenda>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<ItemEncomenda>): Promise<ItemEncomenda>;
    updateById(id: number, itemEncomenda: ItemEncomenda): Promise<void>;
    replaceById(id: number, itemEncomenda: ItemEncomenda): Promise<void>;
    deleteById(id: number): Promise<void>;
}
