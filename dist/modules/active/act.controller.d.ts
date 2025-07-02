import { ActiveService } from './act.service';
export declare class ActiveController {
    private readonly actService;
    constructor(actService: ActiveService);
    activate(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
    deactivate(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
