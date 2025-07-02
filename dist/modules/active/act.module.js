"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveModule = void 0;
const common_1 = require("@nestjs/common");
const act_controller_1 = require("./act.controller");
const act_service_1 = require("./act.service");
const sequelize_1 = require("@nestjs/sequelize");
const subscription_plans_modul_1 = require("../../core/model/subscription_plans.modul");
const jwt_1 = require("@nestjs/jwt");
let ActiveModule = class ActiveModule {
};
exports.ActiveModule = ActiveModule;
exports.ActiveModule = ActiveModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([subscription_plans_modul_1.Subscriptions_Plans_Model]), jwt_1.JwtModule],
        controllers: [act_controller_1.ActiveController],
        providers: [act_service_1.ActiveService]
    })
], ActiveModule);
//# sourceMappingURL=act.module.js.map