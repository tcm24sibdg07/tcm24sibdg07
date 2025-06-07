"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estado = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Estado = class Estado extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Estado = Estado;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Estado.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Estado.prototype, "nome", void 0);
exports.Estado = Estado = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Estado);
//# sourceMappingURL=estado.model.js.map