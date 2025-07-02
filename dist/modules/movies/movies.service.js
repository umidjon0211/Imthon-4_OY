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
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
const movies_modul_1 = require("../../core/model/movies.modul");
const movies_files_modul_1 = require("../../core/model/movies.files.modul");
const favourite_modul_1 = require("../../core/model/favourite.modul");
const reviews_modul_1 = require("../../core/model/reviews.modul");
const categories_model_1 = require("../../core/model/categories.model");
let MoviesService = class MoviesService {
    moviesModel;
    moviesFileModel;
    constructor(moviesModel, moviesFileModel) {
        this.moviesModel = moviesModel;
        this.moviesFileModel = moviesFileModel;
    }
    async getAll(query) {
        let where = {};
        if (query.search) {
            where['title'] = {
                [sequelize_2.Op.iLike]: `%${query.search.trim()}%`
            };
        }
        if (query.subscription_type) {
            where['subscription_type'] = query.subscription_type.trim();
        }
        let include = [
            {
                model: categories_model_1.Categories_Model,
                attributes: ['name'],
                where: query.category ? { name: query.category } : undefined
            }
        ];
        let limit = query.limit ? +query.limit : 10;
        let offset = query.page ? (+query.page - 1) * limit : 0;
        let movie = await this.moviesModel.findAll({
            where,
            include,
            limit,
            offset
        });
        let movieData = movie.map(m => m.get({ plain: true }));
        let total = await this.moviesModel.count({ where, include });
        return {
            success: true,
            data: movieData,
            pagination: {
                total,
                page: query.page || 1,
                limit,
                pages: Math.ceil(total / limit)
            }
        };
    }
    async createMovie(id, payload, poster) {
        let newMovie = await this.moviesModel.create({ ...payload, user_id: id, poster_url: poster.path });
        if (!id)
            throw new common_1.NotFoundException(`this ${id} is not Found`);
        return {
            success: true,
            message: "New movie created",
            data: newMovie
        };
    }
    async create(id, payload, filename) {
        if (!id)
            throw new common_1.NotFoundException(`this ${id} is not Found`);
        if (!filename)
            throw new common_1.NotFoundException(`this ${filename} is not Found`);
        let movie = await this.moviesModel.findOne({
            where: {
                Id: id
            }
        });
        if (!movie) {
            throw new common_1.NotFoundException("Movie spesific id not found");
        }
        const size_mb = parseFloat((filename.size / (1024 * 1024)).toFixed(2));
        let newMovieFile = await this.moviesFileModel.create({ ...payload, movie_id: id, file_url: filename.path, size: size_mb });
        return {
            success: true,
            message: "new MovieFile created",
            data: { ...newMovieFile.dataValues, movie: movie.dataValues },
        };
    }
    async get_by_slug(slug) {
        let get_Slug = await this.moviesModel.findAll({
            where: {
                slug: slug
            }, include: [{ model: movies_files_modul_1.Movies_Files_Model, attributes: ['quality', 'language'] },
                { model: favourite_modul_1.Favorite_Model, attributes: ['movie_id'] },
                { model: reviews_modul_1.Review_Model, attributes: ['rating', 'comment'] },
                { model: categories_model_1.Categories_Model, attributes: ['name'] }]
        });
        if (!get_Slug)
            throw new common_1.BadRequestException(`this ${slug} is not found`);
        return { success: true, dataa: get_Slug };
    }
    async delete_movie(id) {
        let fin_delete = await this.moviesModel.destroy({
            where: {
                Id: id
            }
        });
        if (!fin_delete)
            throw new common_1.NotFoundException(`this ${id} is not Found`);
        return { success: true, data: fin_delete };
    }
    async put_movie(id, payload) {
        let find = await this.moviesModel.findOne({ where: {
                Id: id
            } });
        if (!id)
            throw new common_1.NotFoundException(` this ${id} is not Found`);
        let updated = await find?.update(payload);
        return { success: true, data: updated };
    }
    async Get_All() {
        let all = await this.moviesModel.findAll();
        return all;
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(movies_modul_1.Movies_Model)),
    __param(1, (0, sequelize_1.InjectModel)(movies_files_modul_1.Movies_Files_Model)),
    __metadata("design:paramtypes", [Object, Object])
], MoviesService);
//# sourceMappingURL=movies.service.js.map