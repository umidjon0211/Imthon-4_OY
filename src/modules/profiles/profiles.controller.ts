import { Body, Controller, Get, Param, Post, Put, Query, UnsupportedMediaTypeException, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfileDto } from './ProfileDto/profile.dto';
import { ApiBearerAuth, ApiConsumes, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4} from "uuid"
import { UserRole } from 'src/core/types/user.types';
import { Auth } from 'src/core/decorator/user.decorator';
@Controller('profiles')
export class ProfilesController {
     constructor(private readonly profileService: ProfilesService) { }

     @Auth(UserRole.USER, UserRole.ADMIN)
     @ApiBearerAuth()
     @ApiOperation({ summary: "hama profilni olish admin" })
     @ApiResponse({ status: 200, description: 'Success' })
     @ApiResponse({ status: 404, description: 'UnSuccess' })
     @Get('profiles')
     All_Profiles() {
          return this.profileService.get_all_profile()
     }

     @Auth(UserRole.USER, UserRole.ADMIN)
     @ApiBearerAuth()
     @ApiOperation({ summary: "1 ta profil olish admin" })
     @ApiResponse({ status: 200, description: 'Success' })
     @ApiResponse({ status: 404, description: 'UnSuccess' })
     @Get('one/:id')
     Get_One(@Param('id') id: string) {
          return this.profileService.get_one_profile(id)
     }


     @Auth(UserRole.USER, UserRole.ADMIN)
     @ApiBearerAuth()
     @ApiOperation({ summary: "updata qilish admin"})
     @ApiConsumes('multipart/form-data')
     @ApiResponse({ status: 200, description: 'Success' })
     @ApiResponse({ status: 404, description: 'UnSuccess' })
     @Put('update/profile/:id')
     @UseInterceptors(FileInterceptor('updated_avatar', {
        storage: diskStorage({
            destination: "./uploads/avatars",
            filename: (req, file, cb) => {
                let posterName = uuidv4() + "_" + extname(file.originalname)
                cb(null, posterName)
            }
        }),
        fileFilter: (req, file, callback) => {
            let allowed: string[] = ['image/jpeg', 'image/jpg', 'image/png']
            if (!allowed.includes(file.mimetype)) {
                callback(new UnsupportedMediaTypeException("File tpe must be .jpg | .jpeg | .png "), false)

            }
            callback(null, true)
        }
    }))
     updatedProfile(@Param('id') id: string, @UploadedFile() updated_avatar: Express.Multer.File, @Body() payload: ProfileDto) {
          return this.profileService.updated_profile(updated_avatar,id, payload)
     }

}
