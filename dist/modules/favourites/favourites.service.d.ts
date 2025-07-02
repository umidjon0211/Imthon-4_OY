import { Favorite_Model } from 'src/core/model/favourite.modul';
import { favouriteDto } from './FavouriteDto/favourite.dto';
import { Movies_Model } from 'src/core/model/movies.modul';
export declare class FavouritesService {
    private favouriteModel;
    private movieModel;
    constructor(favouriteModel: typeof Favorite_Model, movieModel: typeof Movies_Model);
    get_favourites(): Promise<{
        success: boolean;
        data: Favorite_Model[];
        total: number;
    }>;
    post_favourites(payload: Partial<favouriteDto>): Promise<{
        success: boolean;
        message: string;
        data: {
            id: any;
            movie_id: any;
            movie_title: any;
            created_at: any;
        };
    }>;
    delete_favourite(movie_id: string): Promise<number>;
    Get_One_favourite(id: string): Promise<Favorite_Model>;
}
