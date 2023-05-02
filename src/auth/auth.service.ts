import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInData } from './dto/signInData.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt/dist';
import { access } from 'fs';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {

    constructor(private userSevice:UsersService,private jwtService : JwtService) {}

    async signIn(signInData: SignInData){
        console.log(signInData)
        const userName = signInData.userName
        const password = signInData.password
        console.log(password)
        const user = await this.userSevice.findOne(userName)
        const isMatch = await bcrypt.compare(password, user.password);
      
        if (user == null  || !isMatch ){

            throw  new UnauthorizedException()
        }

         return {accessToken : await this.jwtService.signAsync({userName:user.userName,sub:user.id})}
    }
}
