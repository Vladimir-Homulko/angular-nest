import { UserLoginDto } from './dto/user-login-dto';
import { UserService } from './../user/user.service';
import { ForbiddenException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: UserLoginDto) {
    const payload = {
      email: userDto.email,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(userLoginDto: UserLoginDto): Promise<boolean> {
    const user = await this.userService.findByEmail(userLoginDto.email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.password !== userLoginDto.password) {
      throw new ForbiddenException('Incorrect password');
    }

    return true;
  }
}
