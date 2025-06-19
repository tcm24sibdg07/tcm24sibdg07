"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemEncomendaProdutoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ItemEncomendaProdutoController = class ItemEncomendaProdutoController {
    constructor(itemEncomendaRepository) {
        this.itemEncomendaRepository = itemEncomendaRepository;
    }
    async getProduto(id) {
        return this.itemEncomendaRepository.produto(id);
    }
};
exports.ItemEncomendaProdutoController = ItemEncomendaProdutoController;
tslib_1.__decorate([
    (0, rest_1.get)('/item-encomendas/{id}/produto', {
        responses: {
            '200': {
                description: 'Produto belonging to ItemEncomenda',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Produto),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemEncomendaProdutoController.prototype, "getProduto", null);
exports.ItemEncomendaProdutoController = ItemEncomendaProdutoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ItemEncomendaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ItemEncomendaRepository])
], ItemEncomendaProdutoController);
//# sourceMappingURL=item-encomenda-produto.controller.js.map