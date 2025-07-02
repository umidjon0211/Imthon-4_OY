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
exports.MoviesFilesController = void 0;
const common_1 = require("@nestjs/common");
const movies_files_service_1 = require("./movies-files.service");
const swagger_1 = require("@nestjs/swagger");
const user_types_1 = require("../../core/types/user.types");
const user_decorator_1 = require("../../core/decorator/user.decorator");
let MoviesFilesController = class MoviesFilesController {
    movieFileServie;
    constructor(movieFileServie) {
        this.movieFileServie = movieFileServie;
    }
    get() { }
};
exports.MoviesFilesController = MoviesFilesController;
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiConsumes)('movifile/getholos'),
    (0, swagger_1.ApiResponse)({ status: 20, description: 'Get' }),
    (0, swagger_1.ApiResponse)({ status: 415, description: 'Get' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoviesFilesController.prototype, "get", null);
exports.MoviesFilesController = MoviesFilesController = __decorate([
    (0, swagger_1.ApiTags)('movie files'),
    (0, common_1.Controller)('movies_files'),
    __metadata("design:paramtypes", [movies_files_service_1.MoviesFilesService])
], MoviesFilesController);
//# sourceMappingURL=movies-files.controller.js.map