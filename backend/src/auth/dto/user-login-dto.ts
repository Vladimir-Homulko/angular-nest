import { IsEmail, Length } from "class-validator";

export class UserLoginDto {

      @IsEmail()
      email: string;

      @Length(4, 100)
      password: string;
}