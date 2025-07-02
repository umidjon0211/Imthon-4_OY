"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPlanService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const subscription_plans_modul_1 = require("../../core/model/subscription_plans.modul");
const user_subscriptions_modul_1 = require("../../core/model/user_subscriptions.modul");
let SubscriptionPlanService = class SubscriptionPlanService {
    subscriptionModel;
    userSubsMol;
    constructor(subscriptionModel, userSubsMol) {
        this.subscriptionModel = subscriptionModel;
        this.userSubsMol = userSubsMol;
    }
    async createSubs(payload) {
        let newSubs = await this.subscriptionModel.create(payload);
        return { success: true, data: newSubs };
    }
    async createUserSubs(user_id, payload) {
        let plan = await this.subscriptionModel.findOne({
            where: { Id: payload.plan_id }
        });
        let date = new Date();
        date.setDate(date.getTime() + plan.duration_days * 24 * 60 * 1000);
        if (!plan)
            throw new common_1.NotFoundException(`this ${payload.plan_id} is not found`);
        let data = await this.userSubsMol.create({ ...payload, user_id, end_date: date });
        return {
            success: true,
            data: data.dataValues,
        };
    }
    async get_all_subs() {
        let all = await this.subscriptionModel.findAll({
            include: [{ model: user_subscriptions_modul_1.User_Subscriptions_Model }]
        });
        return all;
    }
};
exports.SubscriptionPlanService = SubscriptionPlanService;
exports.SubscriptionPlanService = SubscriptionPlanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(subscription_plans_modul_1.Subscriptions_Plans_Model)),
    __param(1, (0, sequelize_1.InjectModel)(user_subscriptions_modul_1.User_Subscriptions_Model)),
    __metadata("design:paramtypes", [Object, Object])
], SubscriptionPlanService);
//# sourceMappingURL=sub-plan.service.js.map