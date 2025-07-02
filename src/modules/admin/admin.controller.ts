import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto } from './adminDto/admin.dto';
import { Auth } from 'src/core/decorator/user.decorator';
import { UserRole } from 'src/core/types/user.types';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('admins')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @ApiBearerAuth()
    @ApiOperation({ summary: "admin qoshish SuperAdmin" })
    @ApiResponse({ status: 201, description: 'Success' })
    @ApiResponse({ status: 404, description: 'UnSuccess' })
    @Auth(UserRole.SUPERADMIN)
    @Post('/add/admin')
    AddAdmin(@Body() payload: AdminDto) {
        return this.adminService.add_admin(payload)
    }

    @ApiOperation({ summary: "admin qoshish" })
    @ApiResponse({ status: 201, description: 'Success' })
    @ApiResponse({ status: 404, description: 'UnSuccess' })
    @ApiBearerAuth()
    @Auth(UserRole.SUPERADMIN, UserRole.ADMIN)
    @Get('all/admins')
    Get_Admin() {
        return this.adminService.get_all()
    }

    @ApiOperation({ summary: "admin ochirish superadmin" })
    @ApiResponse({ status: 20, description: 'Success' })
    @ApiResponse({ status: 404, description: 'UnSuccess' })
    @ApiBearerAuth()
    @Auth(UserRole.SUPERADMIN)
    @Delete()
    Delete_Admin(id: string) {
        return this.adminService.delete_admin(id)
    }
}
