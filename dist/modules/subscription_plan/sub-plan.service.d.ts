import { Subscriptions_Plans_Model } from 'src/core/model/subscription_plans.modul';
import { SubscriptionDto } from './sub_dto/sub.dto';
import { User_Subscriptions_Model } from 'src/core/model/user_subscriptions.modul';
import { UserSubs } from './sub_dto/user_plan.dto';
export declare class SubscriptionPlanService {
    private subscriptionModel;
    private userSubsMol;
    constructor(subscriptionModel: typeof Subscriptions_Plans_Model, userSubsMol: typeof User_Subscriptions_Model);
    createSubs(payload: Required<SubscriptionDto>): Promise<{
        success: boolean;
        data: Subscriptions_Plans_Model;
    }>;
    createUserSubs(user_id: string, payload: Required<UserSubs>): Promise<{
        success: boolean;
        data: any;
    }>;
    get_all_subs(): Promise<Subscriptions_Plans_Model[]>;
}
