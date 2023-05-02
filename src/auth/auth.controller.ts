import { Controller,Body,Post } from '@nestjs/common';
import { SignInData } from './dto/signInData.dto';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('signIn')
    async signIn(@Body() signInData: SignInData){
        return this.authService.signIn(signInData);
    }

}
