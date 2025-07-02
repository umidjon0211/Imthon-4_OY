import { AuthService } from './auth.service';
import { RegisterDto } from './Auth_Dto/register.dto';
import { VerificationDto } from './Auth_Dto/verify.dto';
import { ResetPasswordDto } from './Auth_Dto/resetPassword.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    Register(payload: RegisterDto): Promise<{
        message: string;
    }>;
    Login(payload: VerificationDto): Promise<{
        message: string;
        token: {
            accessToken: string;
            refreshToken?: undefined;
        } | {
            accessToken: string;
            refreshToken: string;
        };
        user: import("../../core/model/user.modul").UserModel;
    }>;
    ResetPassword(payload: ResetPasswordDto): Promise<{
        message: string;
    }>;
}
