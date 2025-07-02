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
exports.FavouritesController = void 0;
const common_1 = require("@nestjs/common");
const favourites_service_1 = require("./favourites.service");
const favourite_dto_1 = require("./FavouriteDto/favourite.dto");
const swagger_1 = require("@nestjs/swagger");
const user_decorator_1 = require("../../core/decorator/user.decorator");
const user_types_1 = require("../../core/types/user.types");
let FavouritesController = class FavouritesController {
    favouriteService;
    constructor(favouriteService) {
        this.favouriteService = favouriteService;
    }
    Post_to_Favourites(payload) {
        return this.favouriteService.post_favourites(payload);
    }
    Get() {
        return this.favouriteService.get_favourites();
    }
    Delete(movie_id) {
        return this.favouriteService.delete_favourite(movie_id);
    }
    Get_One(id) {
        return this.favouriteService.Get_One_favourite(id);
    }
};
exports.FavouritesController = FavouritesController;
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.USER, user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "move ni fovorit qilsh (admin superadmin)" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UnSuccess' }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [favourite_dto_1.favouriteDto]),
    __metadata("design:returntype", void 0)
], FavouritesController.prototype, "Post_to_Favourites", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, user_decorator_1.Auth)(user_types_1.UserRole.USER, user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: "hamasini olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UnSuccess' }),
    (0, common_1.Get)('all/favourites'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FavouritesController.prototype, "Get", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, user_decorator_1.Auth)(user_types_1.UserRole.USER, user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: "delet qilsih fovorit" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UnSuccess' }),
    (0, common_1.Delete)('delete/:movie_id'),
    __param(0, (0, common_1.Param)('movie_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavouritesController.prototype, "Delete", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, user_decorator_1.Auth)(user_types_1.UserRole.USER, user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: "id bilan olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UnSuccess' }),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavouritesController.prototype, "Get_One", null);
exports.FavouritesController = FavouritesController = __decorate([
    (0, common_1.Controller)('favourites'),
    __metadata("design:paramtypes", [favourites_service_1.FavouritesService])
], FavouritesController);
//# sourceMappingURL=favourites.controller.js.map