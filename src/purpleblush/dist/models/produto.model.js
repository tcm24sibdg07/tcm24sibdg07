"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const item_encomenda_model_1 = require("./item-encomenda.model");
const categoria_model_1 = require("./categoria.model");
let Produto = class Produto extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Produto = Produto;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Produto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Produto.prototype, "stock", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Produto.prototype, "nome", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Produto.prototype, "preco", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Produto.prototype, "descricao", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => item_encomenda_model_1.ItemEncomenda),
    tslib_1.__metadata("design:type", Array)
], Produto.prototype, "itemEncomendas", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => categoria_model_1.Categoria),
    tslib_1.__metadata("design:type", Number)
], Produto.prototype, "categoriaId", void 0);
exports.Produto = Produto = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Produto);
//# sourceMappingURL=produto.model.js.map