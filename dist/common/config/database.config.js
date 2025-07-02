"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const categories_model_1 = require("../../core/model/categories.model");
const favourite_modul_1 = require("../../core/model/favourite.modul");
const movie_categories_modul_1 = require("../../core/model/movie.categories.modul");
const movies_files_modul_1 = require("../../core/model/movies.files.modul");
const movies_modul_1 = require("../../core/model/movies.modul");
const payments_modul_1 = require("../../core/model/payments.modul");
const reviews_modul_1 = require("../../core/model/reviews.modul");
const subscription_plans_modul_1 = require("../../core/model/subscription_plans.modul");
const user_subscriptions_modul_1 = require("../../core/model/user_subscriptions.modul");
const user_modul_1 = require("../../core/model/user.modul");
const watch_history_modul_1 = require("../../core/model/watch_history.modul");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    dialect: 'postgres',
                    host: config.get('DB_HOST'),
                    port: +config.get('DB_PORT'),
                    username: config.get('DB_USER'),
                    password: config.get('DB_PASS'),
                    database: config.get('DB_NAME'),
                    models: [
                        categories_model_1.Categories_Model,
                        favourite_modul_1.Favorite_Model,
                        movie_categories_modul_1.Movies_Categories_Model,
                        movies_files_modul_1.Movies_Files_Model,
                        movies_modul_1.Movies_Model,
                        payments_modul_1.Payments_Model,
                        reviews_modul_1.Review_Model,
                        subscription_plans_modul_1.Subscriptions_Plans_Model,
                        user_subscriptions_modul_1.User_Subscriptions_Model,
                        user_modul_1.UserModel,
                        watch_history_modul_1.Watch_History_Model,
                    ],
                    autoLoadModels: true,
                    synchronize: true,
                    dialectOptions: config.get('DB_HOST') !== 'localhost' ? {
                        ssl: {
                            require: true,
                            rejectUnauthorized: false,
                        },
                    } : {},
                }),
            }),
        ],
    })
], DatabaseModule);
//# sourceMappingURL=database.config.js.map