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
exports.SubscriptionPlanController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sub_dto_1 = require("./sub_dto/sub.dto");
const sub_plan_service_1 = require("./sub-plan.service");
const user_decorator_1 = require("../../core/decorator/user.decorator");
const user_types_1 = require("../../core/types/user.types");
let SubscriptionPlanController = class SubscriptionPlanController {
    subsService;
    constructor(subsService) {
        this.subsService = subsService;
    }
    CreateSubs(payload) {
        return this.subsService.createSubs(payload);
    }
    createUserSubs(req, payload) {
        return this.subsService.createUserSubs(req['user'].id, payload);
    }
    GetSubs() {
        return this.subsService.get_all_subs();
    }
};
exports.SubscriptionPlanController = SubscriptionPlanController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "yangi plan qoshish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UnSuccess' }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sub_dto_1.SubscriptionDto]),
    __metadata("design:returntype", void 0)
], SubscriptionPlanController.prototype, "CreateSubs", null);
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.USER),
    (0, common_1.Post)('purchase'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object]),
    __metadata("design:returntype", void 0)
], SubscriptionPlanController.prototype, "createUserSubs", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Subscription hamasini olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UnSuccess' }),
    (0, common_1.Get)('all/subs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubscriptionPlanController.prototype, "GetSubs", null);
exports.SubscriptionPlanController = SubscriptionPlanController = __decorate([
    (0, common_1.Controller)('sub plan'),
    __metadata("design:paramtypes", [sub_plan_service_1.SubscriptionPlanService])
], SubscriptionPlanController);
//# sourceMappingURL=sub-plan.controller.js.map