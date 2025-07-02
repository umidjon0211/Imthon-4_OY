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
exports.MoviesCategoryController = void 0;
const common_1 = require("@nestjs/common");
const movies_category_service_1 = require("./movies-category.service");
const Movies_Category_dto_1 = require("./MoCatDto/Movies.Category.dto");
const swagger_1 = require("@nestjs/swagger");
const user_types_1 = require("../../core/types/user.types");
const user_decorator_1 = require("../../core/decorator/user.decorator");
let MoviesCategoryController = class MoviesCategoryController {
    movie_categoryService;
    constructor(movie_categoryService) {
        this.movie_categoryService = movie_categoryService;
    }
    Create(payload) {
        return this.movie_categoryService.create_movie_category(payload);
    }
    Get_All() {
        return this.movie_categoryService.Get_All();
    }
    Delete_Category(id) {
        return this.movie_categoryService.delete_cat(id);
    }
};
exports.MoviesCategoryController = MoviesCategoryController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN),
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'kino kategorya yaratish admin ' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Kategoriya muvaffaqiyatli yaratildi' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Movies_Category_dto_1.MoCatDto]),
    __metadata("design:returntype", void 0)
], MoviesCategoryController.prototype, "Create", null);
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('all'),
    (0, swagger_1.ApiOperation)({ summary: 'kino kategoryalarni olish admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Barcha kategoriyalar ro‘yxati' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoviesCategoryController.prototype, "Get_All", null);
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'id orqali ochirish admin' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Kategoriya Id raqami' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Kategoriya muvaffaqiyatli ochirildi' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoviesCategoryController.prototype, "Delete_Category", null);
exports.MoviesCategoryController = MoviesCategoryController = __decorate([
    (0, swagger_1.ApiTags)('Kino cate'),
    (0, common_1.Controller)('movies-category'),
    __metadata("design:paramtypes", [movies_category_service_1.MoviesCategoryService])
], MoviesCategoryController);
//# sourceMappingURL=movies-category.controller.js.map