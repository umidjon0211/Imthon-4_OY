import { Model } from "sequelize-typescript";
import { User_Subscriptions_Model } from "./user_subscriptions.modul";
export declare class Subscriptions_Plans_Model extends Model {
    Id: string;
    name: string;
    price: number;
    duration_days: number;
    features: string;
    is_active: true;
    user_subscriptions: User_Subscriptions_Model[];
}
