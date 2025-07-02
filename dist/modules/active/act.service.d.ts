import { Subscriptions_Plans_Model } from 'src/core/model/subscription_plans.modul';
export declare class ActiveService {
    private subsModel;
    constructor(subsModel: typeof Subscriptions_Plans_Model);
    Activate(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
    DeActive(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
