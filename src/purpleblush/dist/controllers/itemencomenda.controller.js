"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemencomendaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ItemencomendaController = class ItemencomendaController {
    constructor(itemEncomendaRepository) {
        this.itemEncomendaRepository = itemEncomendaRepository;
    }
    async create(itemEncomenda) {
        return this.itemEncomendaRepository.create(itemEncomenda);
    }
    async count(where) {
        return this.itemEncomendaRepository.count(where);
    }
    async find(filter) {
        return this.itemEncomendaRepository.find(filter);
    }
    async updateAll(itemEncomenda, where) {
        return this.itemEncomendaRepository.updateAll(itemEncomenda, where);
    }
    async findById(id, filter) {
        return this.itemEncomendaRepository.findById(id, filter);
    }
    async updateById(id, itemEncomenda) {
        await this.itemEncomendaRepository.updateById(id, itemEncomenda);
    }
    async replaceById(id, itemEncomenda) {
        await this.itemEncomendaRepository.replaceById(id, itemEncomenda);
    }
    async deleteById(id) {
        await this.itemEncomendaRepository.deleteById(id);
    }
};
exports.ItemencomendaController = ItemencomendaController;
tslib_1.__decorate([
    (0, rest_1.post)('/item-encomendas'),
    (0, rest_1.response)(200, {
        description: 'ItemEncomenda model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ItemEncomenda) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ItemEncomenda, {
                    title: 'NewItemEncomenda',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ItemEncomenda]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemencomendaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/item-encomendas/count'),
    (0, rest_1.response)(200, {
        description: 'ItemEncomenda model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ItemEncomenda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemencomendaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/item-encomendas'),
    (0, rest_1.response)(200, {
        description: 'Array of ItemEncomenda model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.ItemEncomenda, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ItemEncomenda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemencomendaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/item-encomendas'),
    (0, rest_1.response)(200, {
        description: 'ItemEncomenda PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ItemEncomenda, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ItemEncomenda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ItemEncomenda, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemencomendaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/item-encomendas/{id}'),
    (0, rest_1.response)(200, {
        description: 'ItemEncomenda model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ItemEncomenda, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ItemEncomenda, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemencomendaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/item-encomendas/{id}'),
    (0, rest_1.response)(204, {
        description: 'ItemEncomenda PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ItemEncomenda, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.ItemEncomenda]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemencomendaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/item-encomendas/{id}'),
    (0, rest_1.response)(204, {
        description: 'ItemEncomenda PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.ItemEncomenda]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemencomendaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/item-encomendas/{id}'),
    (0, rest_1.response)(204, {
        description: 'ItemEncomenda DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemencomendaController.prototype, "deleteById", null);
exports.ItemencomendaController = ItemencomendaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ItemEncomendaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ItemEncomendaRepository])
], ItemencomendaController);
//# sourceMappingURL=itemencomenda.controller.js.map