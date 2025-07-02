import { Model } from "sequelize-typescript";
import { Movies_Categories_Model } from "./movie.categories.modul";
import { Movies_Model } from "./movies.modul";
export declare class Categories_Model extends Model {
    Id: string;
    name: string;
    slug: string;
    description: string;
    movies_category: Movies_Categories_Model[];
    movies_id: string;
    movies: Movies_Model;
}
