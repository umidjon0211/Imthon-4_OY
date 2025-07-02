import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from 'src/core/model/user.modul';
import { AdminDto } from './adminDto/admin.dto';

@Injectable()
export class AdminService {
    constructor(@InjectModel(UserModel) private userModel: typeof UserModel) {}

    async add_admin(payload:Required<AdminDto>) {
        let createadmin = await this.userModel.create({...payload, role: 'ADMIN'})
        return createadmin
    }

    async get_all() {
        let all = await this.userModel.findAll({where : {role: 'ADMIN'}})
        return all
    }
    
    async delete_admin(id: string) {
        let deleted = await this.userModel.destroy({where: {Id: id}})
         if (!deleted) throw new NotFoundException(`this ${id} is not found`)
        return deleted
    }
}
