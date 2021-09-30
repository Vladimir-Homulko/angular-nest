import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginDto } from './dto/user-login-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authServise: AuthService) {}

  @Post()
  async auth(@Body() userLoginDto: UserLoginDto) {
   // if (await this.authServise.validateUser(userLoginDto)) {
      return this.authServise.login(userLoginDto);
//}
  }
}
