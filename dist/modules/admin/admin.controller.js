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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const admin_dto_1 = require("./adminDto/admin.dto");
const user_decorator_1 = require("../../core/decorator/user.decorator");
const user_types_1 = require("../../core/types/user.types");
const swagger_1 = require("@nestjs/swagger");
let AdminController = class AdminController {
    adminService;
    constructor(adminService) {
        this.adminService = adminService;
    }
    AddAdmin(payload) {
        return this.adminService.add_admin(payload);
    }
    Get_Admin() {
        return this.adminService.get_all();
    }
    Delete_Admin(id) {
        return this.adminService.delete_admin(id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "admin qoshish SuperAdmin" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UnSuccess' }),
    (0, user_decorator_1.Auth)(user_types_1.UserRole.SUPERADMIN),
    (0, common_1.Post)('/add/admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.AdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "AddAdmin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "admin qoshish" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UnSuccess' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, user_decorator_1.Auth)(user_types_1.UserRole.SUPERADMIN, user_types_1.UserRole.ADMIN),
    (0, common_1.Get)('all/admins'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "Get_Admin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "admin ochirish superadmin" }),
    (0, swagger_1.ApiResponse)({ status: 20, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UnSuccess' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, user_decorator_1.Auth)(user_types_1.UserRole.SUPERADMIN),
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "Delete_Admin", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admins'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map