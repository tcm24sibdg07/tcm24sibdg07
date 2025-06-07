"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassificacaoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ClassificacaoRepository = class ClassificacaoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Classificacao, dataSource);
    }
};
exports.ClassificacaoRepository = ClassificacaoRepository;
exports.ClassificacaoRepository = ClassificacaoRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.purpleblush')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PurpleblushDataSource])
], ClassificacaoRepository);
//# sourceMappingURL=classificacao.repository.js.map