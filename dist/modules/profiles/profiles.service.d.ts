import { ProfileDto } from './ProfileDto/profile.dto';
import { UserModel } from 'src/core/model/user.modul';
export declare class ProfilesService {
    private userModel;
    constructor(userModel: typeof UserModel);
    get_all_profile(): Promise<{
        success: boolean;
        data: UserModel[];
    }>;
    get_query_profile(country: string): Promise<{
        success: boolean;
        data: UserModel[];
    }>;
    get_query_by_name_profile(name: string): Promise<{
        success: boolean;
        data: UserModel[];
    }>;
    get_one_profile(id: string): Promise<{
        success: boolean;
        data: UserModel;
    }>;
    get_query_by_phone_profile(phone_number: string): Promise<{
        success: boolean;
        data: UserModel[];
    }>;
    updated_profile(updated_avatar: Express.Multer.File, id: string, payload: Partial<ProfileDto>): Promise<{
        success: boolean;
        data: UserModel;
    }>;
}
