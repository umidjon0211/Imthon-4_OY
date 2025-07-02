import { Model } from "sequelize-typescript";
import { User_Subscriptions_Model } from "./user_subscriptions.modul";
import { Payment_Method, Payment_Status } from "../types/user.types";
export declare class Payments_Model extends Model {
    Id: string;
    user_subscription_id: string;
    user_subscription: User_Subscriptions_Model;
    amount: number;
    payment_method: Payment_Method;
    payment_details: string;
    status: Payment_Status;
    external_transaction_id: string;
}
