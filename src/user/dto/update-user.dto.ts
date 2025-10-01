import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsDateString, IsEmail, IsOptional, IsString, IsStrongPassword } from 'class-validator';

export class UpdateUserDto {

    @IsString()
    @IsOptional()
    name?: string;

    @IsDateString()
    @IsOptional()
    dateBirth?: Date;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsStrongPassword()
    @IsOptional()
    password?: string;
}
