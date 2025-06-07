"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurpleblushDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'purpleblush',
    connector: 'mysql',
    url: '',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345',
    database: 'purpleblush'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let PurpleblushDataSource = class PurpleblushDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.PurpleblushDataSource = PurpleblushDataSource;
PurpleblushDataSource.dataSourceName = 'purpleblush';
PurpleblushDataSource.defaultConfig = config;
exports.PurpleblushDataSource = PurpleblushDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.purpleblush', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], PurpleblushDataSource);
//# sourceMappingURL=purpleblush.datasource.js.map