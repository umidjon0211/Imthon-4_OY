import { MoviesCategoryService } from './movies-category.service';
import { MoCatDto } from './MoCatDto/Movies.Category.dto';
export declare class MoviesCategoryController {
    private readonly movie_categoryService;
    constructor(movie_categoryService: MoviesCategoryService);
    Create(payload: MoCatDto): Promise<import("../../core/model/movie.categories.modul").Movies_Categories_Model>;
    Get_All(): Promise<import("../../core/model/movie.categories.modul").Movies_Categories_Model[]>;
    Delete_Category(id: string): Promise<{
        success: boolean;
        data: number;
    }>;
}
