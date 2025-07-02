import { Controller, } from '@nestjs/common';
import { MoviesFilesService } from './movies-files.service';
import { ApiConsumes, ApiOperation, ApiResponse, ApiTags, ApiBody, ApiBearerAuth, } from '@nestjs/swagger';
import { UserRole } from 'src/core/types/user.types';
import { Auth } from 'src/core/decorator/user.decorator';

@ApiTags('movie files')
@Controller('movies_files')
export class MoviesFilesController {
    constructor(private readonly movieFileServie: MoviesFilesService) { }

    @Auth(UserRole.ADMIN)
    @ApiOperation({ summary: 'Get' })
    @ApiBearerAuth()
    @ApiConsumes('movifile/getholos')
    @ApiResponse({ status: 20, description: 'Get' })
    @ApiResponse({ status: 415, description: 'Get'})
    get() {}
}
