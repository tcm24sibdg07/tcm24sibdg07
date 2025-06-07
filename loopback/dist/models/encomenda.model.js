"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encomenda = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Encomenda = class Encomenda extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Encomenda = Encomenda;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Encomenda.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Encomenda.prototype, "data", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Encomenda.prototype, "metodo_pagamento", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Encomenda.prototype, "observacao", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Encomenda.prototype, "valor_total", void 0);
exports.Encomenda = Encomenda = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Encomenda);
//# sourceMappingURL=encomenda.model.js.map