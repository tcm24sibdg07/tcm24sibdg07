"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemEncomenda = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ItemEncomenda = class ItemEncomenda extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.ItemEncomenda = ItemEncomenda;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ItemEncomenda.prototype, "preco_unitario", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ItemEncomenda.prototype, "quantidade", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ItemEncomenda.prototype, "id", void 0);
exports.ItemEncomenda = ItemEncomenda = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ItemEncomenda);
//# sourceMappingURL=item-encomenda.model.js.map