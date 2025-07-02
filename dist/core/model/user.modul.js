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
exports.UserModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const user_types_1 = require("../types/user.types");
const user_subscriptions_modul_1 = require("./user_subscriptions.modul");
const movies_modul_1 = require("./movies.modul");
const favourite_modul_1 = require("./favourite.modul");
const watch_history_modul_1 = require("./watch_history.modul");
const reviews_modul_1 = require("./reviews.modul");
let UserModel = class UserModel extends sequelize_typescript_1.Model {
    Id;
    username;
    email;
    password;
    phone;
    country;
    avatar_url;
    role;
    user_subscriptions;
    movies;
    favourites;
    watch_history;
    review;
};
exports.UserModel = UserModel;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], UserModel.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserModel.prototype, "username", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserModel.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        defaultValue: null
    }),
    __metadata("design:type", String)
], UserModel.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        defaultValue: null
    }),
    __metadata("design:type", String)
], UserModel.prototype, "country", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        defaultValue: null
    }),
    __metadata("design:type", String)
], UserModel.prototype, "avatar_url", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.ENUM(...Object.values(user_types_1.UserRole)),
        defaultValue: user_types_1.UserRole.SUPERADMIN
    }),
    __metadata("design:type", String)
], UserModel.prototype, "role", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => user_subscriptions_modul_1.User_Subscriptions_Model),
    __metadata("design:type", Array)
], UserModel.prototype, "user_subscriptions", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => movies_modul_1.Movies_Model),
    __metadata("design:type", movies_modul_1.Movies_Model)
], UserModel.prototype, "movies", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => favourite_modul_1.Favorite_Model),
    __metadata("design:type", Array)
], UserModel.prototype, "favourites", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => watch_history_modul_1.Watch_History_Model),
    __metadata("design:type", Array)
], UserModel.prototype, "watch_history", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => reviews_modul_1.Review_Model),
    __metadata("design:type", Array)
], UserModel.prototype, "review", void 0);
exports.UserModel = UserModel = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "Users" })
], UserModel);
//# sourceMappingURL=user.modul.js.map