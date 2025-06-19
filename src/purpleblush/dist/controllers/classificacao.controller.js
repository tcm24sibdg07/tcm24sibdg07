"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassificacaoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClassificacaoController = class ClassificacaoController {
    constructor(classificacaoRepository) {
        this.classificacaoRepository = classificacaoRepository;
    }
    async create(classificacao) {
        return this.classificacaoRepository.create(classificacao);
    }
    async count(where) {
        return this.classificacaoRepository.count(where);
    }
    async find(filter) {
        return this.classificacaoRepository.find(filter);
    }
    async updateAll(classificacao, where) {
        return this.classificacaoRepository.updateAll(classificacao, where);
    }
    async findById(id, filter) {
        return this.classificacaoRepository.findById(id, filter);
    }
    async updateById(id, classificacao) {
        await this.classificacaoRepository.updateById(id, classificacao);
    }
    async replaceById(id, classificacao) {
        await this.classificacaoRepository.replaceById(id, classificacao);
    }
    async deleteById(id) {
        await this.classificacaoRepository.deleteById(id);
    }
};
exports.ClassificacaoController = ClassificacaoController;
tslib_1.__decorate([
    (0, rest_1.post)('/classificacaos'),
    (0, rest_1.response)(200, {
        description: 'Classificacao model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Classificacao) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Classificacao, {
                    title: 'NewClassificacao',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassificacaoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/classificacaos/count'),
    (0, rest_1.response)(200, {
        description: 'Classificacao model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Classificacao)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassificacaoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/classificacaos'),
    (0, rest_1.response)(200, {
        description: 'Array of Classificacao model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Classificacao, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Classificacao)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassificacaoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/classificacaos'),
    (0, rest_1.response)(200, {
        description: 'Classificacao PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Classificacao, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Classificacao)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Classificacao, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassificacaoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/classificacaos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Classificacao model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Classificacao, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Classificacao, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassificacaoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/classificacaos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Classificacao PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Classificacao, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Classificacao]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassificacaoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/classificacaos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Classificacao PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Classificacao]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassificacaoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/classificacaos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Classificacao DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassificacaoController.prototype, "deleteById", null);
exports.ClassificacaoController = ClassificacaoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ClassificacaoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClassificacaoRepository])
], ClassificacaoController);
//# sourceMappingURL=classificacao.controller.js.map