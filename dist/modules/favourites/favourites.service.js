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
exports.FavouritesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const favourite_modul_1 = require("../../core/model/favourite.modul");
const movies_modul_1 = require("../../core/model/movies.modul");
const user_modul_1 = require("../../core/model/user.modul");
let FavouritesService = class FavouritesService {
    favouriteModel;
    movieModel;
    constructor(favouriteModel, movieModel) {
        this.favouriteModel = favouriteModel;
        this.movieModel = movieModel;
    }
    async get_favourites() {
        let all = await this.favouriteModel.findAll({ include: [{ model: user_modul_1.UserModel }, { model: movies_modul_1.Movies_Model }] });
        let total = await this.favouriteModel.count();
        return { success: true, data: all, total: total };
    }
    async post_favourites(payload) {
        const { user_id, movie_id } = payload;
        if (!user_id)
            throw new common_1.BadRequestException(`${user_id} is Incorrect check again`);
        if (!movie_id)
            throw new common_1.BadRequestException(`${movie_id} is Incorrect check again`);
        let favorite = await this.favouriteModel.create(payload);
        if (!favorite)
            throw new common_1.BadRequestException(`${favorite} is Incorrect check again`);
        let movie = await this.movieModel.findOne({ where: { Id: payload.movie_id } });
        if (!movie?.dataValues.Id)
            throw new common_1.BadRequestException(`${movie} is Incorrect check again`);
        return {
            success: true,
            message: "Kino sevimlilar ro'yxatiga qo'shildi",
            data: {
                id: favorite.dataValues.Id,
                movie_id: movie?.dataValues.Id,
                movie_title: movie?.dataValues.title,
                created_at: favorite.dataValues.createdAt,
            }
        };
    }
    async delete_favourite(movie_id) {
        let deleted = await this.favouriteModel.destroy({ where: {
                movie_id: movie_id
            } });
        if (!deleted)
            throw new common_1.NotFoundException(`this ${movie_id} is not found`);
        return deleted;
    }
    async Get_One_favourite(id) {
        let exists = await this.favouriteModel.findOne({
            where: {
                Id: id
            }
        });
        if (!exists)
            throw new common_1.NotFoundException(`this ${id} is not found`);
        return exists;
    }
};
exports.FavouritesService = FavouritesService;
exports.FavouritesService = FavouritesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(favourite_modul_1.Favorite_Model)),
    __param(1, (0, sequelize_1.InjectModel)(movies_modul_1.Movies_Model)),
    __metadata("design:paramtypes", [Object, Object])
], FavouritesService);
//# sourceMappingURL=favourites.service.js.map