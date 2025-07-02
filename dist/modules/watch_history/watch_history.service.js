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
exports.WatchHistoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const watch_history_modul_1 = require("../../core/model/watch_history.modul");
let WatchHistoryService = class WatchHistoryService {
    watchHistoryModel;
    constructor(watchHistoryModel) {
        this.watchHistoryModel = watchHistoryModel;
    }
    async create(payload) {
        const created = await this.watchHistoryModel.create(payload);
        return { success: true, data: created };
    }
    async findAll() {
        const all = await this.watchHistoryModel.findAll();
        return { success: true, data: all };
    }
    async findOne(id) {
        const one = await this.watchHistoryModel.findByPk(id);
        if (!one)
            throw new common_1.NotFoundException('Ma\'lumot topilmadi');
        return { success: true, data: one };
    }
    async update(id, payload) {
        const [affected, [updated]] = await this.watchHistoryModel.update(payload, {
            where: { Id: id },
            returning: true,
        });
        if (!affected)
            throw new common_1.NotFoundException('Yangilash uchun topilmadi');
        return { success: true, data: updated };
    }
    async delete(id) {
        const deleted = await this.watchHistoryModel.destroy({ where: { Id: id } });
        if (!deleted)
            throw new common_1.NotFoundException('Ochirish uchun topilmadi');
        return { success: true, message: 'Ochirildi' };
    }
};
exports.WatchHistoryService = WatchHistoryService;
exports.WatchHistoryService = WatchHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(watch_history_modul_1.Watch_History_Model)),
    __metadata("design:paramtypes", [Object])
], WatchHistoryService);
//# sourceMappingURL=watch_history.service.js.map