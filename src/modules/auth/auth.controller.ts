import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './Auth_Dto/register.dto';
import { VerificationDto } from './Auth_Dto/verify.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SendVerifyDto } from './Auth_Dto/VeryDto';
import { ResetPasswordDto } from './Auth_Dto/resetPassword.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService ) {}

    @ApiOperation({ summary: "register code orqali"})
    @ApiResponse({ status: 201, description: 'Registered' })
    @ApiResponse({ status: 404, description: 'Not Registered' })
    @Post('register')
    Register(@Body() payload: RegisterDto) {
        return this.authService.register(payload)
    }

    @ApiOperation({ summary: "login qilish"})
    @ApiResponse({ status: 200, description: 'Success' })
    @ApiResponse({ status: 404, description: 'UnSuccess' })
    @Post('login')
    Login(@Body() payload: VerificationDto) {
        return this.authService.verify(payload)
    }

    @ApiOperation({ summary: "reset password"})
    @ApiResponse({ status: 200, description: 'Success' })
    @ApiResponse({ status: 404, description: 'UnSuccess' })
    @Post('reset-password')
    ResetPassword(@Body() payload: ResetPasswordDto) {
        return this.authService.reset_password(payload)
    }

    
    
}
