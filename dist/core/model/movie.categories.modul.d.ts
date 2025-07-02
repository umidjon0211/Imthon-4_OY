import { Model } from "sequelize-typescript";
import { Movies_Model } from "./movies.modul";
import { Categories_Model } from "./categories.model";
export declare class Movies_Categories_Model extends Model {
    Id: string;
    movie_id: string;
    movie: Movies_Model;
    category_id: string;
    category: Categories_Model;
}
