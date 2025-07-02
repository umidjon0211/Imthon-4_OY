import { SubscriptionDto } from './sub_dto/sub.dto';
import { SubscriptionPlanService } from './sub-plan.service';
import { UserSubs } from './sub_dto/user_plan.dto';
export declare class SubscriptionPlanController {
    private readonly subsService;
    constructor(subsService: SubscriptionPlanService);
    CreateSubs(payload: SubscriptionDto): Promise<{
        success: boolean;
        data: import("../../core/model/subscription_plans.modul").Subscriptions_Plans_Model;
    }>;
    createUserSubs(req: Request, payload: Required<UserSubs>): Promise<{
        success: boolean;
        data: any;
    }>;
    GetSubs(): Promise<import("../../core/model/subscription_plans.modul").Subscriptions_Plans_Model[]>;
}
