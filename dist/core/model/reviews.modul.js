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
exports.Review_Model = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_modul_1 = require("./user.modul");
const movies_modul_1 = require("./movies.modul");
let Review_Model = class Review_Model extends sequelize_typescript_1.Model {
    Id;
    user_id;
    user;
    movie_id;
    movie;
    rating;
    comment;
};
exports.Review_Model = Review_Model;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Review_Model.prototype, "Id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_modul_1.UserModel),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.DataTypes.UUID }),
    __metadata("design:type", String)
], Review_Model.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_modul_1.UserModel),
    __metadata("design:type", user_modul_1.UserModel)
], Review_Model.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => movies_modul_1.Movies_Model),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.DataTypes.UUID }),
    __metadata("design:type", String)
], Review_Model.prototype, "movie_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => movies_modul_1.Movies_Model),
    __metadata("design:type", movies_modul_1.Movies_Model)
], Review_Model.prototype, "movie", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.INTEGER,
        validate: { min: 1, max: 5, },
    }),
    __metadata("design:type", Number)
], Review_Model.prototype, "rating", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.TEXT,
    }),
    __metadata("design:type", String)
], Review_Model.prototype, "comment", void 0);
exports.Review_Model = Review_Model = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Reviews' })
], Review_Model);
//# sourceMappingURL=reviews.modul.js.map