import { AdminService } from './admin.service';
import { AdminDto } from './adminDto/admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    AddAdmin(payload: AdminDto): Promise<import("../../core/model/user.modul").UserModel>;
    Get_Admin(): Promise<import("../../core/model/user.modul").UserModel[]>;
    Delete_Admin(id: string): Promise<number>;
}
