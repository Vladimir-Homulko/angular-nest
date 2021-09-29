import { UserDto } from './user/dto/user-dto';
import { UserLoginDto } from './auth/dto/user-login-dto';
import { AuthService } from './auth/auth.service';
import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
    ) { }

    @Post('auth')
    async auth(@Body() userLoginDto: UserLoginDto) {


    }

    @Post('registration')
    async registration(@Body() userDto: UserDto) {
      


    }

    registrValidation(userDto: UserDto): boolean {

      if (userDto.name.length < 4 || userDto.name.length > 100) {
        throw new BadRequestException('name length must be longer then 4 chars and less 100 chars');
      }

      if (userDto.surname.length < 4 || userDto.surname.length > 100) {
        throw new BadRequestException('surname length must be longer then 4 chars and less 100 chars');
      }

      if (userDto.login.length < 4 || userDto.login.length > 100) {
        throw new BadRequestException('login length must be longer then 4 chars and less 100 chars');
      }

      if (!this.containSpecialChars(userDto.login)) {
        throw new BadRequestException('login must contain only symbols and latin')
      }

      if (userDto.password.length < 4 || userDto.password.length > 100) {
        throw new BadRequestException('password length must be longer then 4 chars and less 100 chars');
      }

      if (!this.isValidEmail(userDto.email)) {
        throw new BadRequestException('Incorect email');
      }

      //TODO: date validation

      return true;
    }

    private containSpecialChars(str: string): boolean {
      const regex = /[0-9a-zа-я]/i

      return regex.test(str);
    }

    private isValidEmail(email: string): boolean {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
}
