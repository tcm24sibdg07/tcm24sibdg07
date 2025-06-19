"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaProdutoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CategoriaProdutoController = class CategoriaProdutoController {
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    async find(id, filter) {
        return this.categoriaRepository.produtos(id).find(filter);
    }
    async create(id, produto) {
        return this.categoriaRepository.produtos(id).create(produto);
    }
    async patch(id, produto, where) {
        return this.categoriaRepository.produtos(id).patch(produto, where);
    }
    async delete(id, where) {
        return this.categoriaRepository.produtos(id).delete(where);
    }
};
exports.CategoriaProdutoController = CategoriaProdutoController;
tslib_1.__decorate([
    (0, rest_1.get)('/categorias/{id}/produtos', {
        responses: {
            '200': {
                description: 'Array of Categoria has many Produto',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Produto) },
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
], CategoriaProdutoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/categorias/{id}/produtos', {
        responses: {
            '200': {
                description: 'Categoria model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Produto) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Produto, {
                    title: 'NewProdutoInCategoria',
                    exclude: ['id'],
                    optional: ['categoriaId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaProdutoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/categorias/{id}/produtos', {
        responses: {
            '200': {
                description: 'Categoria.Produto PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Produto, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Produto))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaProdutoController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/categorias/{id}/produtos', {
        responses: {
            '200': {
                description: 'Categoria.Produto DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Produto))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaProdutoController.prototype, "delete", null);
exports.CategoriaProdutoController = CategoriaProdutoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CategoriaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CategoriaRepository])
], CategoriaProdutoController);
//# sourceMappingURL=categoria-produto.controller.js.map