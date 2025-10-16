import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtSrategy } from './jwt.strategy';

@Module({
  imports:[
    JwtModule.register({
        secret:'Codgo Secreto',
        signOptions:{expiresIn:'1h'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtSrategy]
})
export class AuthModule {}
