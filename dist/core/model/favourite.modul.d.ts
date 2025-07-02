import { Model } from 'sequelize-typescript';
import { UserModel } from './user.modul';
import { Movies_Model } from './movies.modul';
export declare class Favorite_Model extends Model {
    Id: string;
    user_id: string;
    user: UserModel;
    movie_id: string;
    movie: Movies_Model;
}
