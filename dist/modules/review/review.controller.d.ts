import { ReviewService } from './review.service';
import { ReviewDto } from './ReviewDto/dto';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    Add_Review(payload: ReviewDto, req: Request, movie_id: string): Promise<{
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
    Get_Review(): Promise<import("../../core/model/reviews.modul").Review_Model[]>;
    Delete_Review(id: string): Promise<{
        success: boolean;
        data: number;
    }>;
}
