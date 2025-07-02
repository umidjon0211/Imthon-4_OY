import { Watch_History_Model } from 'src/core/model/watch_history.modul';
import { WatchHistoryDto } from './WatchDto/dto';
import { UpdateWatchHistoryDto } from './WatchDto/updated.dto';
export declare class WatchHistoryService {
    private watchHistoryModel;
    constructor(watchHistoryModel: typeof Watch_History_Model);
    create(payload: Required<WatchHistoryDto>): Promise<{
        success: boolean;
        data: Watch_History_Model;
    }>;
    findAll(): Promise<{
        success: boolean;
        data: Watch_History_Model[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: Watch_History_Model;
    }>;
    update(id: string, payload: UpdateWatchHistoryDto): Promise<{
        success: boolean;
        data: Watch_History_Model;
    }>;
    delete(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
