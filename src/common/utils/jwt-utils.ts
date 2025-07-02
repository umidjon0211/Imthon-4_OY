import { JwtSignOptions } from "@nestjs/jwt";

export const JwtAccessToken: JwtSignOptions = {
   secret: 'Osahddsf729\={(0',
   expiresIn: '1h'
} 

export const JWtRefreshToken: JwtSignOptions = {
    secret: 'u67wefejvjehvwe3[];/.--=',
    expiresIn: '1h'
}