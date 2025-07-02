import { ProfilesService } from './profiles.service';
import { ProfileDto } from './ProfileDto/profile.dto';
export declare class ProfilesController {
    private readonly profileService;
    constructor(profileService: ProfilesService);
    All_Profiles(): Promise<{
        success: boolean;
        data: import("../../core/model/user.modul").UserModel[];
    }>;
    Get_One(id: string): Promise<{
        success: boolean;
        data: import("../../core/model/user.modul").UserModel;
    }>;
    updatedProfile(id: string, updated_avatar: Express.Multer.File, payload: ProfileDto): Promise<{
        success: boolean;
        data: import("../../core/model/user.modul").UserModel;
    }>;
}
