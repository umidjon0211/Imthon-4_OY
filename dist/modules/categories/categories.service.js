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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const categories_model_1 = require("../../core/model/categories.model");
let CategoriesService = class CategoriesService {
    categoryModel;
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async create_category(payload) {
        let newCat = await this.categoryModel.create(payload);
        return newCat;
    }
    async get_all() {
        let all = await this.categoryModel.findAll();
        return all;
    }
    async put_category(id, payload) {
        let exists = await this.categoryModel.findOne({
            where: {
                Id: id
            }
        });
        if (!exists)
            throw new common_1.NotFoundException(`this ${id} not found`);
        let Updated_Cat = await exists.update(payload);
        return Updated_Cat;
    }
    async delete_category(id) {
        let deleted = await this.categoryModel.destroy({
            where: { Id: id }
        });
        if (!deleted)
            throw new common_1.NotFoundException(`this ${id} not found`);
        return { success: true, data: deleted };
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(categories_model_1.Categories_Model)),
    __metadata("design:paramtypes", [Object])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map