import { Transform } from "class-transformer";
import { IsDateString, IsEmail, IsString, IsStrongPassword } from "class-validator";

export class RegisterDto {

    @Transform(({ value }) => value.trim())
    @IsString()
    name: string;

    @IsDateString()
    dateBirth: Date;

    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsStrongPassword()
    password: string;

}