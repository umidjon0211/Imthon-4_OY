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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movies_Model = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_types_1 = require("../types/user.types");
const user_modul_1 = require("./user.modul");
const movies_files_modul_1 = require("./movies.files.modul");
const watch_history_modul_1 = require("./watch_history.modul");
const favourite_modul_1 = require("./favourite.modul");
const reviews_modul_1 = require("./reviews.modul");
const categories_model_1 = require("./categories.model");
let Movies_Model = class Movies_Model extends sequelize_typescript_1.Model {
    Id;
    title;
    slug;
    description;
    release_year;
    duration_minutes;
    rating;
    poster_url;
    subscription_type;
    view_count;
    created_by;
    user;
    movies_category;
    movies_files;
    watch_history;
    favourite_movie;
    review;
};
exports.Movies_Model = Movies_Model;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Movies_Model.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Movies_Model.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Movies_Model.prototype, "slug", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.TEXT
    }),
    __metadata("design:type", String)
], Movies_Model.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Movies_Model.prototype, "release_year", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Movies_Model.prototype, "duration_minutes", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.DECIMAL(3, 1)
    }),
    __metadata("design:type", Number)
], Movies_Model.prototype, "rating", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Movies_Model.prototype, "poster_url", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.ENUM(...Object.values(user_types_1.Subscription_type)),
        defaultValue: user_types_1.Subscription_type.FREE
    }),
    __metadata("design:type", String)
], Movies_Model.prototype, "subscription_type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0
    }),
    __metadata("design:type", Number)
], Movies_Model.prototype, "view_count", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_modul_1.UserModel),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.DataTypes.UUID }),
    __metadata("design:type", String)
], Movies_Model.prototype, "created_by", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_modul_1.UserModel),
    __metadata("design:type", user_modul_1.UserModel)
], Movies_Model.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => categories_model_1.Categories_Model),
    __metadata("design:type", Array)
], Movies_Model.prototype, "movies_category", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => movies_files_modul_1.Movies_Files_Model),
    __metadata("design:type", Array)
], Movies_Model.prototype, "movies_files", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => watch_history_modul_1.Watch_History_Model),
    __metadata("design:type", Array)
], Movies_Model.prototype, "watch_history", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => favourite_modul_1.Favorite_Model),
    __metadata("design:type", Array)
], Movies_Model.prototype, "favourite_movie", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => reviews_modul_1.Review_Model),
    __metadata("design:type", Array)
], Movies_Model.prototype, "review", void 0);
exports.Movies_Model = Movies_Model = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "Movies" })
], Movies_Model);
//# sourceMappingURL=movies.modul.js.map