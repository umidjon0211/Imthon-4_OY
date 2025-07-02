"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const sequelize_1 = require("@nestjs/sequelize");
const user_modul_1 = require("../../core/model/user.modul");
const jwt_access_module_1 = require("../../common/Jwt/jwt.access.module");
const jwt_refresh_module_1 = require("../../common/Jwt/jwt.refresh.module");
const mail_module_1 = require("../../common/mail/mail.module");
const redis_module_1 = require("../../common/redis/redis.module");
const jwt_1 = require("@nestjs/jwt");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([user_modul_1.UserModel]), jwt_access_module_1.JwtAccessTokenModule, jwt_refresh_module_1.JwtRefreshTokenModule, mail_module_1.MailModule, redis_module_1.RedisModule, jwt_1.JwtModule],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map