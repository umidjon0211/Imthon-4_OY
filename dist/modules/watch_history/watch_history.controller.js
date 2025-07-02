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
exports.WatchHistoryController = void 0;
const common_1 = require("@nestjs/common");
const watch_history_service_1 = require("./watch_history.service");
const updated_dto_1 = require("./WatchDto/updated.dto");
const user_types_1 = require("../../core/types/user.types");
const user_decorator_1 = require("../../core/decorator/user.decorator");
const swagger_1 = require("@nestjs/swagger");
let WatchHistoryController = class WatchHistoryController {
    watchHistoryService;
    constructor(watchHistoryService) {
        this.watchHistoryService = watchHistoryService;
    }
    findAll() {
        return this.watchHistoryService.findAll();
    }
    findOne(id) {
        return this.watchHistoryService.findOne(id);
    }
    update(id, payload) {
        return this.watchHistoryService.update(id, payload);
    }
    remove(id) {
        return this.watchHistoryService.delete(id);
    }
};
exports.WatchHistoryController = WatchHistoryController;
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN, user_types_1.UserRole.SUPERADMIN),
    (0, common_1.Get)('all'),
    (0, swagger_1.ApiOperation)({ summary: 'Hammasini olush admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Muvaffaqiyatli' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WatchHistoryController.prototype, "findAll", null);
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN, user_types_1.UserRole.SUPERADMIN),
    (0, common_1.Get)('id/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'id orqali olish' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Watch history ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Topildi' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Topilmadi' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WatchHistoryController.prototype, "findOne", null);
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN, user_types_1.UserRole.SUPERADMIN),
    (0, common_1.Put)('update/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'update qilish id admin' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Yangilanishi kerak bolgan ID' }),
    (0, swagger_1.ApiBody)({ type: updated_dto_1.UpdateWatchHistoryDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Muvaffaqiyatli yangilandi' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Topilmadi' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updated_dto_1.UpdateWatchHistoryDto]),
    __metadata("design:returntype", void 0)
], WatchHistoryController.prototype, "update", null);
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN, user_types_1.UserRole.SUPERADMIN),
    (0, common_1.Delete)('delete/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'delet qilish id orqali' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Ochiriladigan ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Muvaffaqiyatli ochirildi' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Topilmadi' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WatchHistoryController.prototype, "remove", null);
exports.WatchHistoryController = WatchHistoryController = __decorate([
    (0, swagger_1.ApiTags)('watch history'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('watch-history'),
    __metadata("design:paramtypes", [watch_history_service_1.WatchHistoryService])
], WatchHistoryController);
//# sourceMappingURL=watch_history.controller.js.map