import { UserModel } from 'src/core/model/user.modul';
import { AdminDto } from './adminDto/admin.dto';
export declare class AdminService {
    private userModel;
    constructor(userModel: typeof UserModel);
    add_admin(payload: Required<AdminDto>): Promise<UserModel>;
    get_all(): Promise<UserModel[]>;
    delete_admin(id: string): Promise<number>;
}
