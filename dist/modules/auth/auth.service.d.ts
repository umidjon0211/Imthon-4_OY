import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/common/mail/mail.service';
import { RedisService } from 'src/common/redis/redis.service';
import { UserModel } from 'src/core/model/user.modul';
import { RegisterDto } from './Auth_Dto/register.dto';
import { VerificationDto } from './Auth_Dto/verify.dto';
import { SendVerifyDto } from './Auth_Dto/VeryDto';
import { ResetPasswordDto } from './Auth_Dto/resetPassword.dto';
export declare class AuthService {
    private userModel;
    private jwtService;
    private mailerService;
    private redisService;
    constructor(userModel: typeof UserModel, jwtService: JwtService, mailerService: MailService, redisService: RedisService);
    private generateToken;
    register(payload: Required<RegisterDto>): Promise<{
        message: string;
    }>;
    verify(payload: Required<VerificationDto>): Promise<{
        message: string;
        token: {
            accessToken: string;
            refreshToken?: undefined;
        } | {
            accessToken: string;
            refreshToken: string;
        };
        user: UserModel;
    }>;
    sendVerify(payload: Required<SendVerifyDto>): Promise<{
        message: string;
    }>;
    reset_password(payload: Required<ResetPasswordDto>): Promise<{
        message: string;
    }>;
}
