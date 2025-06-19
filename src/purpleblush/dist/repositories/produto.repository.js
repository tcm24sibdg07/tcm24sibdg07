"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ProdutoRepository = class ProdutoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, itemEncomendaRepositoryGetter, categoriaRepositoryGetter) {
        super(models_1.Produto, dataSource);
        this.itemEncomendaRepositoryGetter = itemEncomendaRepositoryGetter;
        this.categoriaRepositoryGetter = categoriaRepositoryGetter;
        this.categoria = this.createBelongsToAccessorFor('categoria', categoriaRepositoryGetter);
        this.registerInclusionResolver('categoria', this.categoria.inclusionResolver);
        this.itemEncomendas = this.createHasManyRepositoryFactoryFor('itemEncomendas', itemEncomendaRepositoryGetter);
        this.registerInclusionResolver('itemEncomendas', this.itemEncomendas.inclusionResolver);
    }
};
exports.ProdutoRepository = ProdutoRepository;
exports.ProdutoRepository = ProdutoRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.purpleblush')),
    tslib_1.__param(1, repository_1.repository.getter('ItemEncomendaRepository')),
    tslib_1.__param(2, repository_1.repository.getter('CategoriaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PurpleblushDataSource, Function, Function])
], ProdutoRepository);
//# sourceMappingURL=produto.repository.js.map