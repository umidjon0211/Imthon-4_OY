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
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const categories_service_1 = require("./categories.service");
const category_dto_1 = require("./CategoryDto/category.dto");
const swagger_1 = require("@nestjs/swagger");
const user_decorator_1 = require("../../core/decorator/user.decorator");
const user_types_1 = require("../../core/types/user.types");
let CategoriesController = class CategoriesController {
    catergoryService;
    constructor(catergoryService) {
        this.catergoryService = catergoryService;
    }
    AddCategory(payload) {
        return this.catergoryService.create_category(payload);
    }
    AllCategory() {
        return this.catergoryService.get_all();
    }
    CHangeCategory(id, payload) {
        return this.catergoryService.put_category(id, payload);
    }
    DeleteCategory(id) {
        return this.catergoryService.delete_category(id);
    }
};
exports.CategoriesController = CategoriesController;
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('add'),
    (0, swagger_1.ApiOperation)({ summary: 'kategorya qoyish Admin' }),
    (0, swagger_1.ApiBody)({ type: category_dto_1.CategoryDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'yaratildi' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.CategoryDto]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "AddCategory", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN),
    (0, common_1.Get)('all'),
    (0, swagger_1.ApiOperation)({ summary: 'kategorlayal Admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Kategoriya royxati qaytarildi' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "AllCategory", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN),
    (0, common_1.Put)('change/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'malumot ozgartrirish Admin' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Ozgartirilayotgan kategoriyaning Id raqami' }),
    (0, swagger_1.ApiBody)({ type: category_dto_1.CategoryDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Kategoriya muvaffaqiyatli yangilandi' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, category_dto_1.CategoryDto]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "CHangeCategory", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN),
    (0, common_1.Delete)('delete/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Kat ochirish admin' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Ochiriladigan kategoriyaning Id raqami' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Kategoriya ochirildi' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "DeleteCategory", null);
exports.CategoriesController = CategoriesController = __decorate([
    (0, swagger_1.ApiTags)('Kategoriyalar'),
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
//# sourceMappingURL=categories.controller.js.map