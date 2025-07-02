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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const register_dto_1 = require("./Auth_Dto/register.dto");
const verify_dto_1 = require("./Auth_Dto/verify.dto");
const swagger_1 = require("@nestjs/swagger");
const resetPassword_dto_1 = require("./Auth_Dto/resetPassword.dto");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    Register(payload) {
        return this.authService.register(payload);
    }
    Login(payload) {
        return this.authService.verify(payload);
    }
    ResetPassword(payload) {
        return this.authService.reset_password(payload);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "register code orqali" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Registered' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Registered' }),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "Register", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "login qilish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UnSuccess' }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_dto_1.VerificationDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "Login", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "reset password" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UnSuccess' }),
    (0, common_1.Post)('reset-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resetPassword_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "ResetPassword", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map