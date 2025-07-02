import { Movies_Categories_Model } from 'src/core/model/movie.categories.modul';
import { MoCatDto } from './MoCatDto/Movies.Category.dto';
export declare class MoviesCategoryService {
    private movies_category;
    constructor(movies_category: typeof Movies_Categories_Model);
    create_movie_category(payload: Required<MoCatDto>): Promise<Movies_Categories_Model>;
    Get_All(): Promise<Movies_Categories_Model[]>;
    delete_cat(id: string): Promise<{
        success: boolean;
        data: number;
    }>;
}
