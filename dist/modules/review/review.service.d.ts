import { Review_Model } from 'src/core/model/reviews.modul';
import { ReviewDto } from './ReviewDto/dto';
export declare class ReviewService {
    private reviewModel;
    constructor(reviewModel: typeof Review_Model);
    add_review(payload: Required<ReviewDto>, user: any, movie_id: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: any;
            user: {
                id: any;
                username: any;
            };
            movie_id: string;
            rating: number;
            comment: string;
            created_at: any;
        };
    }>;
    get_reviews(): Promise<Review_Model[]>;
    delete_review(id: string): Promise<{
        success: boolean;
        data: number;
    }>;
}
