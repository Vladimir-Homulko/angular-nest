import { UserLoginDto } from './dto/user-login-dto';
import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

      constructor(
            private userService: UserService,
            private jwtService: JwtService
      ) { }

      async login(userDto: UserLoginDto) {
            const payload = {
                  email: userDto.email
            }

            return {
                  access_token: this.jwtService.sign(payload)
            }
      }
}
