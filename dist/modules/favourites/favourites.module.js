"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavouritesModule = void 0;
const common_1 = require("@nestjs/common");
const favourites_service_1 = require("./favourites.service");
const favourites_controller_1 = require("./favourites.controller");
const sequelize_1 = require("@nestjs/sequelize");
const favourite_modul_1 = require("../../core/model/favourite.modul");
const movies_modul_1 = require("../../core/model/movies.modul");
const jwt_1 = require("@nestjs/jwt");
let FavouritesModule = class FavouritesModule {
};
exports.FavouritesModule = FavouritesModule;
exports.FavouritesModule = FavouritesModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([favourite_modul_1.Favorite_Model, movies_modul_1.Movies_Model]), jwt_1.JwtModule],
        providers: [favourites_service_1.FavouritesService],
        controllers: [favourites_controller_1.FavouritesController]
    })
], FavouritesModule);
//# sourceMappingURL=favourites.module.js.map