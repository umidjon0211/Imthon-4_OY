"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAccessTokenModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_utils_1 = require("../utils/jwt-utils");
const jwt_1 = require("@nestjs/jwt");
let JwtAccessTokenModule = class JwtAccessTokenModule {
};
exports.JwtAccessTokenModule = JwtAccessTokenModule;
exports.JwtAccessTokenModule = JwtAccessTokenModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.register(jwt_utils_1.JwtAccessToken)]
    })
], JwtAccessTokenModule);
//# sourceMappingURL=jwt.access.module.js.map