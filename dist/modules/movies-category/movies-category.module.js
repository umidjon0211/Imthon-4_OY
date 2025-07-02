"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const movies_category_service_1 = require("./movies-category.service");
const movies_category_controller_1 = require("./movies-category.controller");
const sequelize_1 = require("@nestjs/sequelize");
const movie_categories_modul_1 = require("../../core/model/movie.categories.modul");
const jwt_1 = require("@nestjs/jwt");
let MoviesCategoryModule = class MoviesCategoryModule {
};
exports.MoviesCategoryModule = MoviesCategoryModule;
exports.MoviesCategoryModule = MoviesCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([movie_categories_modul_1.Movies_Categories_Model]), jwt_1.JwtModule],
        providers: [movies_category_service_1.MoviesCategoryService],
        controllers: [movies_category_controller_1.MoviesCategoryController]
    })
], MoviesCategoryModule);
//# sourceMappingURL=movies-category.module.js.map