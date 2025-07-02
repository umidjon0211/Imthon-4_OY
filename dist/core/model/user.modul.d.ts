import { Model } from "sequelize-typescript";
import { UserRole } from "../types/user.types";
import { User_Subscriptions_Model } from "./user_subscriptions.modul";
import { Movies_Model } from "./movies.modul";
import { Favorite_Model } from "./favourite.modul";
import { Watch_History_Model } from "./watch_history.modul";
import { Review_Model } from "./reviews.modul";
export declare class UserModel extends Model {
    Id: string;
    username: string;
    email: string;
    password: string;
    phone: string;
    country: string;
    avatar_url?: string;
    role: UserRole;
    user_subscriptions: User_Subscriptions_Model[];
    movies: Movies_Model;
    favourites: Favorite_Model[];
    watch_history: Watch_History_Model[];
    review: Review_Model[];
}
