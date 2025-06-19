"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EstadoController = class EstadoController {
    constructor(estadoRepository) {
        this.estadoRepository = estadoRepository;
    }
    async create(estado) {
        return this.estadoRepository.create(estado);
    }
    async count(where) {
        return this.estadoRepository.count(where);
    }
    async find(filter) {
        return this.estadoRepository.find(filter);
    }
    async updateAll(estado, where) {
        return this.estadoRepository.updateAll(estado, where);
    }
    async findById(id, filter) {
        return this.estadoRepository.findById(id, filter);
    }
    async updateById(id, estado) {
        await this.estadoRepository.updateById(id, estado);
    }
    async replaceById(id, estado) {
        await this.estadoRepository.replaceById(id, estado);
    }
    async deleteById(id) {
        await this.estadoRepository.deleteById(id);
    }
};
exports.EstadoController = EstadoController;
tslib_1.__decorate([
    (0, rest_1.post)('/estados'),
    (0, rest_1.response)(200, {
        description: 'Estado model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Estado) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estado, {
                    title: 'NewEstado',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Estado]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/estados/count'),
    (0, rest_1.response)(200, {
        description: 'Estado model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Estado)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/estados'),
    (0, rest_1.response)(200, {
        description: 'Array of Estado model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Estado, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Estado)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/estados'),
    (0, rest_1.response)(200, {
        description: 'Estado PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estado, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Estado)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Estado, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/estados/{id}'),
    (0, rest_1.response)(200, {
        description: 'Estado model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estado, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Estado, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/estados/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estado PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estado, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Estado]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/estados/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estado PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Estado]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/estados/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estado DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadoController.prototype, "deleteById", null);
exports.EstadoController = EstadoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EstadoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EstadoRepository])
], EstadoController);
//# sourceMappingURL=estado.controller.js.map