import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService) { }

    async register(registerDto: RegisterDto) {
        const user = await this.userService.findOnebyEmail(registerDto.email);

        if (user) {
            throw new BadRequestException('User already exists');
        }

        registerDto.password = await bcryptjs.hash(registerDto.password, 10);

        return await this.userService.create(registerDto);

    }

    async login(loginDto: LoginDto) {
        const user = await this.userService.findOnebyEmail(loginDto.email);

        if (!user) {
            throw new UnauthorizedException('Email is wrong')
        }

        const isPasswordValid = await bcryptjs.compare(loginDto.password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Password is wrong')
        }
        const email = user.email;
        const name = user.name;
        const payLoad = { email: loginDto.email }
        const token = await this.jwtService.signAsync(payLoad);

        return {
            token,
            email,
            name
        };
    }
}
