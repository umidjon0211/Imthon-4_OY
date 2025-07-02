import { Model } from "sequelize-typescript";
import { Movies_Model } from "./movies.modul";
import { Lang } from "../types/user.types";
export declare class Movies_Files_Model extends Model {
    Id: string;
    movie_id: string;
    movie: Movies_Model;
    file_url: string;
    quality: '280p' | '480p' | '1080p' | '4k';
    language: Lang;
    size: string;
}
