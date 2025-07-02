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
exports.Categories_Model = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const movie_categories_modul_1 = require("./movie.categories.modul");
const movies_modul_1 = require("./movies.modul");
let Categories_Model = class Categories_Model extends sequelize_typescript_1.Model {
    Id;
    name;
    slug;
    description;
    movies_category;
    movies_id;
    movies;
};
exports.Categories_Model = Categories_Model;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Categories_Model.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Categories_Model.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Categories_Model.prototype, "slug", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.TEXT
    }),
    __metadata("design:type", String)
], Categories_Model.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => movie_categories_modul_1.Movies_Categories_Model),
    __metadata("design:type", Array)
], Categories_Model.prototype, "movies_category", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => movies_modul_1.Movies_Model),
    __metadata("design:type", String)
], Categories_Model.prototype, "movies_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => movies_modul_1.Movies_Model),
    __metadata("design:type", movies_modul_1.Movies_Model)
], Categories_Model.prototype, "movies", void 0);
exports.Categories_Model = Categories_Model = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "Categories" })
], Categories_Model);
//# sourceMappingURL=categories.model.js.map