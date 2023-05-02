import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { Constant } from './constants/jwtSecret';
@Module({
  imports: [UsersModule,JwtModule.register(
    {
      secret : Constant.secret,
      signOptions : { expiresIn: '6000000000000000s' },
      global : true
    }
  )],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
