"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesFilesModule = void 0;
const common_1 = require("@nestjs/common");
const movies_files_service_1 = require("./movies-files.service");
const movies_files_controller_1 = require("./movies-files.controller");
const sequelize_1 = require("@nestjs/sequelize");
const movies_files_modul_1 = require("../../core/model/movies.files.modul");
const jwt_1 = require("@nestjs/jwt");
let MoviesFilesModule = class MoviesFilesModule {
};
exports.MoviesFilesModule = MoviesFilesModule;
exports.MoviesFilesModule = MoviesFilesModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([movies_files_modul_1.Movies_Files_Model]), jwt_1.JwtModule],
        providers: [movies_files_service_1.MoviesFilesService],
        controllers: [movies_files_controller_1.MoviesFilesController]
    })
], MoviesFilesModule);
//# sourceMappingURL=movies-files.module.js.map