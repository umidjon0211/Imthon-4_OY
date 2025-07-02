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
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_modul_1 = require("../../core/model/user.modul");
let ProfilesService = class ProfilesService {
    userModel;
    constructor(userModel) {
        this.userModel = userModel;
    }
    async get_all_profile() {
        const all_profiles = await this.userModel.findAll();
        return { success: true, data: all_profiles };
    }
    async get_query_profile(country) {
        let profile = await this.userModel.findAll({
            where: {
                country: country
            },
        });
        if (!profile)
            throw new common_1.NotFoundException(`this ${country} is not found`);
        return { success: true, data: profile };
    }
    async get_query_by_name_profile(name) {
        let profile = await this.userModel.findAll({
            where: {
                username: name
            },
        });
        if (!profile)
            throw new common_1.NotFoundException(`this ${name} is not found`);
        return { success: true, data: profile };
    }
    async get_one_profile(id) {
        let profile = await this.userModel.findOne({
            where: {
                Id: id
            },
        });
        if (!profile)
            throw new common_1.NotFoundException(`this ${id} is not found`);
        return { success: true, data: profile };
    }
    async get_query_by_phone_profile(phone_number) {
        let profile = await this.userModel.findAll({
            where: {
                phone: phone_number
            },
        });
        if (!profile)
            throw new common_1.NotFoundException(`this ${phone_number} is not found`);
        return { success: true, data: profile };
    }
    async updated_profile(updated_avatar, id, payload) {
        const user = await this.userModel.findOne({ where: { Id: id } });
        const updated_url = `/uploads/avatars/${updated_avatar.filename}`;
        if (!user) {
            throw new common_1.NotFoundException(`Profile with id ${id} not found`);
        }
        const updated = await user.update({ ...payload, avatar_url: updated_url });
        return { success: true, data: updated };
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_modul_1.UserModel)),
    __metadata("design:paramtypes", [Object])
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map