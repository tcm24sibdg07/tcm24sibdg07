"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Categoria = class Categoria extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Categoria = Categoria;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Categoria.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Categoria.prototype, "nome", void 0);
exports.Categoria = Categoria = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Categoria);
//# sourceMappingURL=categoria.model.js.map