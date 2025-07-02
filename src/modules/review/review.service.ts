import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Review_Model } from 'src/core/model/reviews.modul';
import { ReviewDto } from './ReviewDto/dto';
import { UserModel } from 'src/core/model/user.modul';
import { Movies_Model } from 'src/core/model/movies.modul';

@Injectable()
export class ReviewService {
    constructor(@InjectModel(Review_Model) private reviewModel: typeof Review_Model) { }

    async add_review(payload: Required<ReviewDto>, user: any, movie_id: string) {
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
        let all = await this.reviewModel.findAll({ include: [{ model: UserModel }, { model: Movies_Model }] })
        return all
    }

    async delete_review(id: string) {
        let find_review = await this.reviewModel.destroy({
            where: {
                Id: id
            }
        })
        if (!find_review) throw new NotFoundException(`this ${id} is not found`)

        return { success: true, data: find_review }
    }
}
