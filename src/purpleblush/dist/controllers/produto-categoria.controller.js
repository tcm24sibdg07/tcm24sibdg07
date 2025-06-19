"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoCategoriaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProdutoCategoriaController = class ProdutoCategoriaController {
    constructor(produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    async getCategoria(id) {
        return this.produtoRepository.categoria(id);
    }
};
exports.ProdutoCategoriaController = ProdutoCategoriaController;
tslib_1.__decorate([
    (0, rest_1.get)('/produtos/{id}/categoria', {
        responses: {
            '200': {
                description: 'Categoria belonging to Produto',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Categoria),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoCategoriaController.prototype, "getCategoria", null);
exports.ProdutoCategoriaController = ProdutoCategoriaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProdutoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProdutoRepository])
], ProdutoCategoriaController);
//# sourceMappingURL=produto-categoria.controller.js.map