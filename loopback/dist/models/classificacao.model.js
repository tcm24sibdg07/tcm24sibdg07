"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classificacao = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Classificacao = class Classificacao extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Classificacao = Classificacao;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Classificacao.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Classificacao.prototype, "estrelas", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Classificacao.prototype, "comentario", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Classificacao.prototype, "data", void 0);
exports.Classificacao = Classificacao = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Classificacao);
//# sourceMappingURL=classificacao.model.js.map