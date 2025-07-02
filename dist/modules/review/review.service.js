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
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const reviews_modul_1 = require("../../core/model/reviews.modul");
const user_modul_1 = require("../../core/model/user.modul");
const movies_modul_1 = require("../../core/model/movies.modul");
let ReviewService = class ReviewService {
    reviewModel;
    constructor(reviewModel) {
        this.reviewModel = reviewModel;
    }
    async add_review(payload, user, movie_id) {
        const created = await this.reviewModel.create({
            ...payload,
            movie_id,
            user_id: user.id
        });
        const response = {
            success: true,
            message: "Sharh muvaffaqiyatli qo'shildi",
            data: {
                id: created.id,
                user: {
                    id: user.id,
                    username: user.username
                },
                movie_id: created.movie_id,
                rating: created.rating,
                comment: created.comment,
                created_at: created.createdAt
            }
        };
        return response;
    }
    async get_reviews() {
        let all = await this.reviewModel.findAll({ include: [{ model: user_modul_1.UserModel }, { model: movies_modul_1.Movies_Model }] });
        return all;
    }
    async delete_review(id) {
        let find_review = await this.reviewModel.destroy({
            where: {
                Id: id
            }
        });
        if (!find_review)
            throw new common_1.NotFoundException(`this ${id} is not found`);
        return { success: true, data: find_review };
    }
};
exports.ReviewService = ReviewService;
exports.ReviewService = ReviewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(reviews_modul_1.Review_Model)),
    __metadata("design:paramtypes", [Object])
], ReviewService);
//# sourceMappingURL=review.service.js.map