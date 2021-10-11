import { IsDefined, IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { ROLE } from './../../constants/role';

export class UserUpdateDto {

  @Length(4, 100)
  name: string;

  @Length(4, 100)
  surname: string;

  @Length(4, 100)
  login: string;
  
  @IsEmail()
  email: string;

  @IsOptional()
  password: string;

  @IsNotEmpty()
  sex: string;
  
  @IsNotEmpty()
  birthday: Date;
  
  @IsNotEmpty()
  role: ROLE.USER;
}