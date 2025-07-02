"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./modules/auth/auth.module");
const profiles_module_1 = require("./modules/profiles/profiles.module");
const database_config_1 = require("./common/config/database.config");
const ioredis_1 = require("@nestjs-modules/ioredis");
const mail_module_1 = require("./common/mail/mail.module");
const sub_plan_module_1 = require("./modules/subscription_plan/sub-plan.module");
const movies_module_1 = require("./modules/movies/movies.module");
const favourites_module_1 = require("./modules/favourites/favourites.module");
const movies_files_module_1 = require("./modules/movies-files/movies-files.module");
const categories_module_1 = require("./modules/categories/categories.module");
const movies_category_module_1 = require("./modules/movies-category/movies-category.module");
const admin_module_1 = require("./modules/admin/admin.module");
const review_module_1 = require("./modules/review/review.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, profiles_module_1.ProfilesModule, database_config_1.DatabaseModule, ioredis_1.RedisModule, mail_module_1.MailModule, sub_plan_module_1.SubscriptionPlanModule, movies_module_1.MoviesModule, favourites_module_1.FavouritesModule, movies_files_module_1.MoviesFilesModule, categories_module_1.CategoriesModule, movies_category_module_1.MoviesCategoryModule, admin_module_1.AdminModule, review_module_1.ReviewModule]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map