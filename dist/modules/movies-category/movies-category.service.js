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
exports.MoviesCategoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const movie_categories_modul_1 = require("../../core/model/movie.categories.modul");
const categories_model_1 = require("../../core/model/categories.model");
const movies_modul_1 = require("../../core/model/movies.modul");
let MoviesCategoryService = class MoviesCategoryService {
    movies_category;
    constructor(movies_category) {
        this.movies_category = movies_category;
    }
    async create_movie_category(payload) {
        let create = await this.movies_category.create(payload);
        return create;
    }
    async Get_All() {
        let all = await this.movies_category.findAll({
            include: [{ model: categories_model_1.Categories_Model }, { model: movies_modul_1.Movies_Model }],
        });
        return all;
    }
    async delete_cat(id) {
        let destroyed = await this.movies_category.destroy({ where: { Id: id } });
        if (!destroyed)
            throw new common_1.NotFoundException(`this ${id} is not Found`);
        return { success: true, data: destroyed };
    }
};
exports.MoviesCategoryService = MoviesCategoryService;
exports.MoviesCategoryService = MoviesCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(movie_categories_modul_1.Movies_Categories_Model)),
    __metadata("design:paramtypes", [Object])
], MoviesCategoryService);
//# sourceMappingURL=movies-category.service.js.map