import { WatchHistoryService } from './watch_history.service';
import { UpdateWatchHistoryDto } from './WatchDto/updated.dto';
export declare class WatchHistoryController {
    private readonly watchHistoryService;
    constructor(watchHistoryService: WatchHistoryService);
    findAll(): Promise<{
        success: boolean;
        data: import("../../core/model/watch_history.modul").Watch_History_Model[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: import("../../core/model/watch_history.modul").Watch_History_Model;
    }>;
    update(id: string, payload: UpdateWatchHistoryDto): Promise<{
        success: boolean;
        data: import("../../core/model/watch_history.modul").Watch_History_Model;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
