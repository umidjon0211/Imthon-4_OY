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
exports.ActiveService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const subscription_plans_modul_1 = require("../../core/model/subscription_plans.modul");
let ActiveService = class ActiveService {
    subsModel;
    constructor(subsModel) {
        this.subsModel = subsModel;
    }
    async Activate(id) {
        const exists = await this.subsModel.findOne({ where: { Id: id } });
        if (!exists)
            throw new common_1.NotFoundException(`Subscription plan with id ${id} not found`);
        if (exists.is_active) {
            throw new common_1.BadRequestException(`Subscription plan is already active`);
        }
        await exists.update({ is_active: true });
        return { success: true, message: 'Successfully Activated' };
    }
    async DeActive(id) {
        const exists = await this.subsModel.findOne({ where: { Id: id } });
        if (!exists)
            throw new common_1.NotFoundException(`Subscription plan with id ${id} not found`);
        if (!exists.is_active) {
            throw new common_1.BadRequestException(`Subscription plan is already deactivated`);
        }
        await exists.update({ is_active: false });
        return { success: true, message: 'Successfully DeActivated' };
    }
};
exports.ActiveService = ActiveService;
exports.ActiveService = ActiveService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(subscription_plans_modul_1.Subscriptions_Plans_Model)),
    __metadata("design:paramtypes", [Object])
], ActiveService);
//# sourceMappingURL=act.service.js.map