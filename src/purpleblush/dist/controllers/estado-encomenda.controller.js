"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoEncomendaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EstadoEncomendaController = class EstadoEncomendaController {
    constructor(estadoRepository) {
        this.estadoRepository = estadoRepository;
    }
    async find(id, filter) {
        return this.estadoRepository.encomendas(id).find(filter);
    }
    async create(id, encomenda) {
        return this.estadoRepository.encomendas(id).create(encomenda);
    }
    async patch(id, encomenda, where) {
        return this.estadoRepository.encomendas(id).patch(encomenda, where);
    }
    async delete(id, where) {
        return this.estadoRepository.encomendas(id).delete(where);
    }
};
exports.EstadoEncomendaController = EstadoEncomendaController;
tslib_1.__decorate([
    (0, rest_1.get)('/estados/{id}/encomendas', {
        responses: {
            '200': {
                description: 'Array of Estado has many Encomenda',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Encomenda) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadoEncomendaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/estados/{id}/encomendas', {
        responses: {
            '200': {
                description: 'Estado model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Encomenda) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomenda, {
                    title: 'NewEncomendaInEstado',
                    exclude: ['id'],
                    optional: ['estadoId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadoEncomendaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/estados/{id}/encomendas', {
        responses: {
            '200': {
                description: 'Estado.Encomenda PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomenda, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Encomenda))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadoEncomendaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/estados/{id}/encomendas', {
        responses: {
            '200': {
                description: 'Estado.Encomenda DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Encomenda))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EstadoEncomendaController.prototype, "delete", null);
exports.EstadoEncomendaController = EstadoEncomendaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EstadoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EstadoRepository])
], EstadoEncomendaController);
//# sourceMappingURL=estado-encomenda.controller.js.map