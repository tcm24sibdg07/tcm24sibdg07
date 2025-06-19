"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncomendaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let EncomendaRepository = class EncomendaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, clienteRepositoryGetter, estadoRepositoryGetter, classificacaoRepositoryGetter, itemEncomendaRepositoryGetter) {
        super(models_1.Encomenda, dataSource);
        this.clienteRepositoryGetter = clienteRepositoryGetter;
        this.estadoRepositoryGetter = estadoRepositoryGetter;
        this.classificacaoRepositoryGetter = classificacaoRepositoryGetter;
        this.itemEncomendaRepositoryGetter = itemEncomendaRepositoryGetter;
        this.itemEncomendas = this.createHasManyRepositoryFactoryFor('itemEncomendas', itemEncomendaRepositoryGetter);
        this.registerInclusionResolver('itemEncomendas', this.itemEncomendas.inclusionResolver);
        this.classificacao = this.createHasOneRepositoryFactoryFor('classificacao', classificacaoRepositoryGetter);
        this.registerInclusionResolver('classificacao', this.classificacao.inclusionResolver);
        this.estado = this.createBelongsToAccessorFor('estado', estadoRepositoryGetter);
        this.registerInclusionResolver('estado', this.estado.inclusionResolver);
        this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter);
        this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
    }
};
exports.EncomendaRepository = EncomendaRepository;
exports.EncomendaRepository = EncomendaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.purpleblush')),
    tslib_1.__param(1, repository_1.repository.getter('ClienteRepository')),
    tslib_1.__param(2, repository_1.repository.getter('EstadoRepository')),
    tslib_1.__param(3, repository_1.repository.getter('ClassificacaoRepository')),
    tslib_1.__param(4, repository_1.repository.getter('ItemEncomendaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PurpleblushDataSource, Function, Function, Function, Function])
], EncomendaRepository);
//# sourceMappingURL=encomenda.repository.js.map