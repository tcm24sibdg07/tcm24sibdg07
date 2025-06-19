"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteEncomendaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClienteEncomendaController = class ClienteEncomendaController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async find(id, filter) {
        return this.clienteRepository.encomendas(id).find(filter);
    }
    async create(id, encomenda) {
        return this.clienteRepository.encomendas(id).create(encomenda);
    }
    async patch(id, encomenda, where) {
        return this.clienteRepository.encomendas(id).patch(encomenda, where);
    }
    async delete(id, where) {
        return this.clienteRepository.encomendas(id).delete(where);
    }
};
exports.ClienteEncomendaController = ClienteEncomendaController;
tslib_1.__decorate([
    (0, rest_1.get)('/clientes/{id}/encomendas', {
        responses: {
            '200': {
                description: 'Array of Cliente has many Encomenda',
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
], ClienteEncomendaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/clientes/{id}/encomendas', {
        responses: {
            '200': {
                description: 'Cliente model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Encomenda) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomenda, {
                    title: 'NewEncomendaInCliente',
                    exclude: ['id'],
                    optional: ['clienteId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteEncomendaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/clientes/{id}/encomendas', {
        responses: {
            '200': {
                description: 'Cliente.Encomenda PATCH success count',
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
], ClienteEncomendaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/clientes/{id}/encomendas', {
        responses: {
            '200': {
                description: 'Cliente.Encomenda DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Encomenda))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteEncomendaController.prototype, "delete", null);
exports.ClienteEncomendaController = ClienteEncomendaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ClienteRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClienteRepository])
], ClienteEncomendaController);
//# sourceMappingURL=cliente-encomenda.controller.js.map