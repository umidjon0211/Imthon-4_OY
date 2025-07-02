import { FavouritesService } from './favourites.service';
import { favouriteDto } from './FavouriteDto/favourite.dto';
export declare class FavouritesController {
    private readonly favouriteService;
    constructor(favouriteService: FavouritesService);
    Post_to_Favourites(payload: favouriteDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: any;
            movie_id: any;
            movie_title: any;
            created_at: any;
        };
    }>;
    Get(): Promise<{
        success: boolean;
        data: import("../../core/model/favourite.modul").Favorite_Model[];
        total: number;
    }>;
    Delete(movie_id: string): Promise<number>;
    Get_One(id: string): Promise<import("../../core/model/favourite.modul").Favorite_Model>;
}
