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
exports.ProfilesController = void 0;
const common_1 = require("@nestjs/common");
const profiles_service_1 = require("./profiles.service");
const profile_dto_1 = require("./ProfileDto/profile.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const uuid_1 = require("uuid");
const user_types_1 = require("../../core/types/user.types");
const user_decorator_1 = require("../../core/decorator/user.decorator");
let ProfilesController = class ProfilesController {
    profileService;
    constructor(profileService) {
        this.profileService = profileService;
    }
    All_Profiles() {
        return this.profileService.get_all_profile();
    }
    Get_One(id) {
        return this.profileService.get_one_profile(id);
    }
    updatedProfile(id, updated_avatar, payload) {
        return this.profileService.updated_profile(updated_avatar, id, payload);
    }
};
exports.ProfilesController = ProfilesController;
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.USER, user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "hama profilni olish admin" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UnSuccess' }),
    (0, common_1.Get)('profiles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "All_Profiles", null);
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.USER, user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "1 ta profil olish admin" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UnSuccess' }),
    (0, common_1.Get)('one/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "Get_One", null);
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.USER, user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "updata qilish admin" }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UnSuccess' }),
    (0, common_1.Put)('update/profile/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('updated_avatar', {
        storage: (0, multer_1.diskStorage)({
            destination: "./uploads/avatars",
            filename: (req, file, cb) => {
                let posterName = (0, uuid_1.v4)() + "_" + (0, path_1.extname)(file.originalname);
                cb(null, posterName);
            }
        }),
        fileFilter: (req, file, callback) => {
            let allowed = ['image/jpeg', 'image/jpg', 'image/png'];
            if (!allowed.includes(file.mimetype)) {
                callback(new common_1.UnsupportedMediaTypeException("File tpe must be .jpg | .jpeg | .png "), false);
            }
            callback(null, true);
        }
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, profile_dto_1.ProfileDto]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "updatedProfile", null);
exports.ProfilesController = ProfilesController = __decorate([
    (0, common_1.Controller)('profiles'),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService])
], ProfilesController);
//# sourceMappingURL=profiles.controller.js.map