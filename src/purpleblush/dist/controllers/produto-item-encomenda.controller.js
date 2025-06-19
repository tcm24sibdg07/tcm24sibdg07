"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoItemEncomendaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProdutoItemEncomendaController = class ProdutoItemEncomendaController {
    constructor(produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    async find(id, filter) {
        return this.produtoRepository.itemEncomendas(id).find(filter);
    }
    async create(id, itemEncomenda) {
        return this.produtoRepository.itemEncomendas(id).create(itemEncomenda);
    }
    async patch(id, itemEncomenda, where) {
        return this.produtoRepository.itemEncomendas(id).patch(itemEncomenda, where);
    }
    async delete(id, where) {
        return this.produtoRepository.itemEncomendas(id).delete(where);
    }
};
exports.ProdutoItemEncomendaController = ProdutoItemEncomendaController;
tslib_1.__decorate([
    (0, rest_1.get)('/produtos/{id}/item-encomendas', {
        responses: {
            '200': {
                description: 'Array of Produto has many ItemEncomenda',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.ItemEncomenda) },
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
], ProdutoItemEncomendaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/produtos/{id}/item-encomendas', {
        responses: {
            '200': {
                description: 'Produto model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ItemEncomenda) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ItemEncomenda, {
                    title: 'NewItemEncomendaInProduto',
                    exclude: ['id'],
                    optional: ['produtoId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoItemEncomendaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/produtos/{id}/item-encomendas', {
        responses: {
            '200': {
                description: 'Produto.ItemEncomenda PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ItemEncomenda, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.ItemEncomenda))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoItemEncomendaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/produtos/{id}/item-encomendas', {
        responses: {
            '200': {
                description: 'Produto.ItemEncomenda DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.ItemEncomenda))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoItemEncomendaController.prototype, "delete", null);
exports.ProdutoItemEncomendaController = ProdutoItemEncomendaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProdutoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProdutoRepository])
], ProdutoItemEncomendaController);
//# sourceMappingURL=produto-item-encomenda.controller.js.map