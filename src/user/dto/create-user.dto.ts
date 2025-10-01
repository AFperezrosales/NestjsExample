import { IsDate, isDateString, IsDateString, IsEmail, IsString, IsStrongPassword } from "class-validator";
import { EnumRole } from "../entities/EnumRole";

export class CreateUserDto {

    @IsString()
    name: string;

    @IsDateString()
    dateBirth: Date;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;

}
