import { Model } from "sequelize-typescript";
import { UserModel } from "./user.modul";
import { Subscriptions_Plans_Model } from "./subscription_plans.modul";
import { Status } from "../types/user.types";
import { Payments_Model } from "./payments.modul";
export declare class User_Subscriptions_Model extends Model {
    Id: string;
    user_id: string;
    user: UserModel;
    plan_id: string;
    subscriptions: Subscriptions_Plans_Model;
    start_date: Date;
    end_date: Date;
    status: Status;
    auto_renew: boolean;
    payments: Payments_Model[];
}
