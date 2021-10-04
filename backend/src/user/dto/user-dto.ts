import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ROLE } from './../../constants/role';

export class UserDto {

  @Length(4, 100)
  name: string;

  @Length(4, 100)
  surname: string;

  @Length(4, 100)
  login: string;
  
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  sex: string;
  
  @IsNotEmpty()
  birthday: Date;
  
  @IsNotEmpty()
  role: ROLE.USER;
}
