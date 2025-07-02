import { Model } from "sequelize-typescript";
import { Subscription_type } from "../types/user.types";
import { UserModel } from "./user.modul";
import { Movies_Files_Model } from "./movies.files.modul";
import { Watch_History_Model } from "./watch_history.modul";
import { Favorite_Model } from "./favourite.modul";
import { Review_Model } from "./reviews.modul";
import { Categories_Model } from "./categories.model";
export declare class Movies_Model extends Model {
    Id: string;
    title: string;
    slug: string;
    description: string;
    release_year: number;
    duration_minutes: number;
    rating: number;
    poster_url: string;
    subscription_type: Subscription_type;
    view_count: number;
    created_by: string;
    user: UserModel;
    movies_category: Categories_Model[];
    movies_files: Movies_Files_Model[];
    watch_history: Watch_History_Model[];
    favourite_movie: Favorite_Model[];
    review: Review_Model[];
}
