"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncomendaClienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EncomendaClienteController = class EncomendaClienteController {
    constructor(encomendaRepository) {
        this.encomendaRepository = encomendaRepository;
    }
    async getCliente(id) {
        return this.encomendaRepository.cliente(id);
    }
};
exports.EncomendaClienteController = EncomendaClienteController;
tslib_1.__decorate([
    (0, rest_1.get)('/encomendas/{id}/cliente', {
        responses: {
            '200': {
                description: 'Cliente belonging to Encomenda',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaClienteController.prototype, "getCliente", null);
exports.EncomendaClienteController = EncomendaClienteController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EncomendaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EncomendaRepository])
], EncomendaClienteController);
//# sourceMappingURL=encomenda-cliente.controller.js.map