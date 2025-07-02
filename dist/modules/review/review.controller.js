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
exports.ReviewController = void 0;
const common_1 = require("@nestjs/common");
const review_service_1 = require("./review.service");
const dto_1 = require("./ReviewDto/dto");
const swagger_1 = require("@nestjs/swagger");
let ReviewController = class ReviewController {
    reviewService;
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    Add_Review(payload, req, movie_id) {
        return this.reviewService.add_review(payload, req['user'].id, movie_id);
    }
    Get_Review() {
        return this.reviewService.get_reviews();
    }
    Delete_Review(id) {
        return this.reviewService.delete_review(id);
    }
};
exports.ReviewController = ReviewController;
__decorate([
    (0, common_1.Post)('add/:movie_id'),
    (0, swagger_1.ApiOperation)({ summary: 'yangi rewiews qoshishn' }),
    (0, swagger_1.ApiBody)({ type: dto_1.ReviewDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Review successfully added' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid data' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Param)('movie_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ReviewDto, Request, String]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "Add_Review", null);
__decorate([
    (0, common_1.Get)('all/reviews'),
    (0, swagger_1.ApiOperation)({ summary: 'hammasini olish admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all reviews' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "Get_Review", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'delet qilsih id orqali' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Review ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Review successfully deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Review not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "Delete_Review", null);
exports.ReviewController = ReviewController = __decorate([
    (0, swagger_1.ApiTags)('reviews'),
    (0, common_1.Controller)('review'),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], ReviewController);
//# sourceMappingURL=review.controller.js.map