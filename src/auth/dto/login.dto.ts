import { Transform } from "class-transformer";
import { IsEmail, IsStrongPassword } from "class-validator";


export class LoginDto {
    @IsEmail()
    email: string

    @Transform(({ value }) => value.trim())
    @IsStrongPassword()
    password: string;

}