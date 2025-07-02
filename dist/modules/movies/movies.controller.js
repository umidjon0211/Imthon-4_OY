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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const movies_service_1 = require("./movies.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const path_1 = require("path");
const movie_dto_1 = require("./MovieDto/movie.dto");
const swagger_1 = require("@nestjs/swagger");
const user_decorator_1 = require("../../core/decorator/user.decorator");
const user_types_1 = require("../../core/types/user.types");
const movie_dto_2 = require("../movies-files/MovieDto/movie.dto");
const movie_query_dto_1 = require("./MovieDto/movie.query.dto");
const update_dto_1 = require("./MovieDto/update.dto");
let MoviesController = class MoviesController {
    movieService;
    constructor(movieService) {
        this.movieService = movieService;
    }
    getByQuery(query) {
        return this.movieService.getAll(query);
    }
    createMovie(req, poster, payload) {
        return this.movieService.createMovie(req['user'].id, payload, poster);
    }
    create(id, video, payload) {
        return this.movieService.create(id, payload, video);
    }
    GetSlug(slug) {
        return this.movieService.get_by_slug(slug);
    }
    Updated_Movie(id, payload) {
        return this.movieService.put_movie(id, payload);
    }
    Delete(id) {
        return this.movieService.delete_movie(id);
    }
    GetAll() {
        return this.movieService.Get_All();
    }
};
exports.MoviesController = MoviesController;
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN, user_types_1.UserRole.USER),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'qidiruv' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'topildi' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Topilmadi' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: String, description: 'raqami' }),
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_query_dto_1.MovieQuery]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "getByQuery", null);
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Yangi kino qoshish admin va super' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'qoshildi' }),
    (0, swagger_1.ApiResponse)({ status: 415, description: 'Notogri' }),
    (0, swagger_1.ApiBody)({
        description: 'malumotlari',
        type: movie_dto_1.MovieDto,
    }),
    (0, common_1.Post)('add/movie'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('poster', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/posters',
            filename: (req, file, cb) => {
                let posterName = (0, uuid_1.v4)() + '_' + (0, path_1.extname)(file.originalname);
                cb(null, posterName);
            },
        }),
        fileFilter: (req, file, callback) => {
            let allowed = ['image/jpeg', 'image/jpg', 'image/png'];
            if (!allowed.includes(file.mimetype)) {
                return callback(new common_1.UnsupportedMediaTypeException('File type must be .jpg | .jpeg | .png'), false);
            }
            callback(null, true);
        },
    })),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object, movie_dto_1.MovieDto]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "createMovie", null);
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'kino qoshish id billan admin va supperadmin' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Kino muvaffaqiyatli qoshildi' }),
    (0, swagger_1.ApiResponse)({ status: 415, description: 'Notogri fayl turi ' }),
    (0, common_1.Post)("/:id/files"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('video', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/videos',
            filename: (req, file, cb) => {
                let videoName = (0, uuid_1.v4)() + "_" + (0, path_1.extname)(file.originalname);
                cb(null, videoName);
            }
        }),
        fileFilter: (req, file, callback) => {
            let allowed = ['video/mp4', 'video/webm'];
            if (!allowed.includes(file.mimetype)) {
                callback(new common_1.UnsupportedMediaTypeException('Only  .mp4 | webm types are allowed'), false);
            }
            callback(null, true);
        }
    })),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, movie_dto_2.Movie_Files_Dto]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "create", null);
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN, user_types_1.UserRole.USER),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'slag orqali qidiruv admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Kino topildi' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Kino topilmadi' }),
    (0, swagger_1.ApiParam)({ name: 'slug', required: true, description: 'Filmning slug qiymati' }),
    (0, common_1.Get)('/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "GetSlug", null);
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Id orqali put qilish FAQAT ADMIN' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'UPDATED' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'ERROR' }),
    (0, common_1.Put)('/id/change'),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.Updated_MovieDto]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "Updated_Movie", null);
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'id orqali qoshish admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Kino topildi' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Kino topilmadi' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'id qiymat' }),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "Delete", null);
__decorate([
    (0, user_decorator_1.Auth)(user_types_1.UserRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'movi ni olish admmin' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Kino topildi' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Kino topilmadi' }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "GetAll", null);
exports.MoviesController = MoviesController = __decorate([
    (0, swagger_1.ApiTags)('Movies'),
    (0, common_1.Controller)('movies'),
    __metadata("design:paramtypes", [movies_service_1.MoviesService])
], MoviesController);
//# sourceMappingURL=movies.controller.js.map