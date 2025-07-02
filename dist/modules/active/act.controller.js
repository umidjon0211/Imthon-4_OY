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
exports.ActiveController = void 0;
const common_1 = require("@nestjs/common");
const act_service_1 = require("./act.service");
const swagger_1 = require("@nestjs/swagger");
const user_decorator_1 = require("../../core/decorator/user.decorator");
const user_types_1 = require("../../core/types/user.types");
let ActiveController = class ActiveController {
    actService;
    constructor(actService) {
        this.actService = actService;
    }
    async activate(id) {
        return await this.actService.Activate(id);
    }
    async deactivate(id) {
        return await this.actService.DeActive(id);
    }
};
exports.ActiveController = ActiveController;
__decorate([
    (0, common_1.Patch)('/activate/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN, user_types_1.UserRole.SUPERADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'faol qilish' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Subscription plan ID (UUID)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Faollashtirildi' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Topilmadi' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Allaqachon faollashtirilgan' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActiveController.prototype, "activate", null);
__decorate([
    (0, common_1.Patch)('/deactivate/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN, user_types_1.UserRole.SUPERADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'no active qilish' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Subscription plan ID (UUID)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ochirildi (noaktiv)' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Topilmadi' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Allaqachon noaktiv holatda' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActiveController.prototype, "deactivate", null);
exports.ActiveController = ActiveController = __decorate([
    (0, swagger_1.ApiTags)('DeActive And Activate'),
    (0, common_1.Controller)('active'),
    __metadata("design:paramtypes", [act_service_1.ActiveService])
], ActiveController);
//# sourceMappingURL=act.controller.js.map