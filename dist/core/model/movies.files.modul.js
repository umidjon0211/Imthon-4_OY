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
exports.Movies_Files_Model = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const movies_modul_1 = require("./movies.modul");
const user_types_1 = require("../types/user.types");
const sequelize_typescript_2 = require("sequelize-typescript");
let Movies_Files_Model = class Movies_Files_Model extends sequelize_typescript_1.Model {
    Id;
    movie_id;
    movie;
    file_url;
    quality;
    language;
    size;
};
exports.Movies_Files_Model = Movies_Files_Model;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Movies_Files_Model.prototype, "Id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => movies_modul_1.Movies_Model),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.DataTypes.UUID }),
    __metadata("design:type", String)
], Movies_Files_Model.prototype, "movie_id", void 0);
__decorate([
    (0, sequelize_typescript_2.BelongsTo)(() => movies_modul_1.Movies_Model),
    __metadata("design:type", movies_modul_1.Movies_Model)
], Movies_Files_Model.prototype, "movie", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Movies_Files_Model.prototype, "file_url", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Movies_Files_Model.prototype, "quality", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.ENUM(...Object.values(user_types_1.Lang)),
        defaultValue: user_types_1.Lang.UZB
    }),
    __metadata("design:type", String)
], Movies_Files_Model.prototype, "language", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Movies_Files_Model.prototype, "size", void 0);
exports.Movies_Files_Model = Movies_Files_Model = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "Movies_Files" })
], Movies_Files_Model);
//# sourceMappingURL=movies.files.modul.js.map