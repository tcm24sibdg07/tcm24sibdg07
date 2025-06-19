"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let CategoriaRepository = class CategoriaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, produtoRepositoryGetter) {
        super(models_1.Categoria, dataSource);
        this.produtoRepositoryGetter = produtoRepositoryGetter;
        this.produtos = this.createHasManyRepositoryFactoryFor('produtos', produtoRepositoryGetter);
        this.registerInclusionResolver('produtos', this.produtos.inclusionResolver);
    }
};
exports.CategoriaRepository = CategoriaRepository;
exports.CategoriaRepository = CategoriaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.purpleblush')),
    tslib_1.__param(1, repository_1.repository.getter('ProdutoRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PurpleblushDataSource, Function])
], CategoriaRepository);
//# sourceMappingURL=categoria.repository.js.map