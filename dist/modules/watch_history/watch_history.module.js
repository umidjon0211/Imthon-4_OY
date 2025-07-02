"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const watch_history_service_1 = require("./watch_history.service");
const watch_history_controller_1 = require("./watch_history.controller");
const sequelize_1 = require("@nestjs/sequelize");
const watch_history_modul_1 = require("../../core/model/watch_history.modul");
const jwt_1 = require("@nestjs/jwt");
let WatchHistoryModule = class WatchHistoryModule {
};
exports.WatchHistoryModule = WatchHistoryModule;
exports.WatchHistoryModule = WatchHistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([watch_history_modul_1.Watch_History_Model]), jwt_1.JwtModule],
        providers: [watch_history_service_1.WatchHistoryService],
        controllers: [watch_history_controller_1.WatchHistoryController]
    })
], WatchHistoryModule);
//# sourceMappingURL=watch_history.module.js.map