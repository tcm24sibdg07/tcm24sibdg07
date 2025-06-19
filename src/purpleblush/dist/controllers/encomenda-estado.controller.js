"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncomendaEstadoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EncomendaEstadoController = class EncomendaEstadoController {
    constructor(encomendaRepository) {
        this.encomendaRepository = encomendaRepository;
    }
    async getEstado(id) {
        return this.encomendaRepository.estado(id);
    }
};
exports.EncomendaEstadoController = EncomendaEstadoController;
tslib_1.__decorate([
    (0, rest_1.get)('/encomendas/{id}/estado', {
        responses: {
            '200': {
                description: 'Estado belonging to Encomenda',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Estado),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaEstadoController.prototype, "getEstado", null);
exports.EncomendaEstadoController = EncomendaEstadoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EncomendaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EncomendaRepository])
], EncomendaEstadoController);
//# sourceMappingURL=encomenda-estado.controller.js.map