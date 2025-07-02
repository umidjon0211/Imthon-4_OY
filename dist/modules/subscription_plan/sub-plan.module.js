"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPlanModule = void 0;
const common_1 = require("@nestjs/common");
const sub_plan_service_1 = require("./sub-plan.service");
const sub_plan_controller_1 = require("./sub-plan.controller");
const sequelize_1 = require("@nestjs/sequelize");
const subscription_plans_modul_1 = require("../../core/model/subscription_plans.modul");
const jwt_1 = require("@nestjs/jwt");
const user_subscriptions_modul_1 = require("../../core/model/user_subscriptions.modul");
let SubscriptionPlanModule = class SubscriptionPlanModule {
};
exports.SubscriptionPlanModule = SubscriptionPlanModule;
exports.SubscriptionPlanModule = SubscriptionPlanModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([subscription_plans_modul_1.Subscriptions_Plans_Model, user_subscriptions_modul_1.User_Subscriptions_Model]), jwt_1.JwtModule],
        providers: [sub_plan_service_1.SubscriptionPlanService],
        controllers: [sub_plan_controller_1.SubscriptionPlanController]
    })
], SubscriptionPlanModule);
//# sourceMappingURL=sub-plan.module.js.map