"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncomendaClassificacaoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EncomendaClassificacaoController = class EncomendaClassificacaoController {
    constructor(encomendaRepository) {
        this.encomendaRepository = encomendaRepository;
    }
    async get(id, filter) {
        return this.encomendaRepository.classificacao(id).get(filter);
    }
    async create(id, classificacao) {
        return this.encomendaRepository.classificacao(id).create(classificacao);
    }
    async patch(id, classificacao, where) {
        return this.encomendaRepository.classificacao(id).patch(classificacao, where);
    }
    async delete(id, where) {
        return this.encomendaRepository.classificacao(id).delete(where);
    }
};
exports.EncomendaClassificacaoController = EncomendaClassificacaoController;
tslib_1.__decorate([
    (0, rest_1.get)('/encomendas/{id}/classificacao', {
        responses: {
            '200': {
                description: 'Encomenda has one Classificacao',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Classificacao),
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
], EncomendaClassificacaoController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/encomendas/{id}/classificacao', {
        responses: {
            '200': {
                description: 'Encomenda model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Classificacao) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Classificacao, {
                    title: 'NewClassificacaoInEncomenda',
                    exclude: ['id'],
                    optional: ['encomendaId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaClassificacaoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/encomendas/{id}/classificacao', {
        responses: {
            '200': {
                description: 'Encomenda.Classificacao PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Classificacao, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Classificacao))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaClassificacaoController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/encomendas/{id}/classificacao', {
        responses: {
            '200': {
                description: 'Encomenda.Classificacao DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Classificacao))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaClassificacaoController.prototype, "delete", null);
exports.EncomendaClassificacaoController = EncomendaClassificacaoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EncomendaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EncomendaRepository])
], EncomendaClassificacaoController);
//# sourceMappingURL=encomenda-classificacao.controller.js.map