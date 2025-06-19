"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassificacaoEncomendaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClassificacaoEncomendaController = class ClassificacaoEncomendaController {
    constructor(classificacaoRepository) {
        this.classificacaoRepository = classificacaoRepository;
    }
    async getEncomenda(id) {
        return this.classificacaoRepository.encomenda(id);
    }
};
exports.ClassificacaoEncomendaController = ClassificacaoEncomendaController;
tslib_1.__decorate([
    (0, rest_1.get)('/classificacaos/{id}/encomenda', {
        responses: {
            '200': {
                description: 'Encomenda belonging to Classificacao',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Encomenda),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassificacaoEncomendaController.prototype, "getEncomenda", null);
exports.ClassificacaoEncomendaController = ClassificacaoEncomendaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ClassificacaoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClassificacaoRepository])
], ClassificacaoEncomendaController);
//# sourceMappingURL=classificacao-encomenda.controller.js.map