"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncomendaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EncomendaController = class EncomendaController {
    constructor(encomendaRepository) {
        this.encomendaRepository = encomendaRepository;
    }
    async create(encomenda) {
        return this.encomendaRepository.create(encomenda);
    }
    async count(where) {
        return this.encomendaRepository.count(where);
    }
    async find(filter) {
        return this.encomendaRepository.find(filter);
    }
    async updateAll(encomenda, where) {
        return this.encomendaRepository.updateAll(encomenda, where);
    }
    async findById(id, filter) {
        return this.encomendaRepository.findById(id, filter);
    }
    async updateById(id, encomenda) {
        await this.encomendaRepository.updateById(id, encomenda);
    }
    async replaceById(id, encomenda) {
        await this.encomendaRepository.replaceById(id, encomenda);
    }
    async deleteById(id) {
        await this.encomendaRepository.deleteById(id);
    }
};
exports.EncomendaController = EncomendaController;
tslib_1.__decorate([
    (0, rest_1.post)('/encomendas'),
    (0, rest_1.response)(200, {
        description: 'Encomenda model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Encomenda) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomenda, {
                    title: 'NewEncomenda',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/encomendas/count'),
    (0, rest_1.response)(200, {
        description: 'Encomenda model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Encomenda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/encomendas'),
    (0, rest_1.response)(200, {
        description: 'Array of Encomenda model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Encomenda, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Encomenda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/encomendas'),
    (0, rest_1.response)(200, {
        description: 'Encomenda PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomenda, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Encomenda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Encomenda, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/encomendas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Encomenda model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomenda, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Encomenda, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/encomendas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encomenda PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomenda, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Encomenda]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/encomendas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encomenda PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Encomenda]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/encomendas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encomenda DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaController.prototype, "deleteById", null);
exports.EncomendaController = EncomendaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EncomendaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EncomendaRepository])
], EncomendaController);
//# sourceMappingURL=encomenda.controller.js.map