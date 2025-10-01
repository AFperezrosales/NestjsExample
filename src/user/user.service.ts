import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { EnumRole } from './entities/EnumRole';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRespository: Repository<User>
  ) {
  }

  async create(createUserDto: CreateUserDto) {
    const user = this.userRespository.create(createUserDto);
    return await this.userRespository.save(user);
  }

  async findAll() {
    return await this.userRespository.find();
  }

  async findOne(id: number) {
    return await this.userRespository.findBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRespository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRespository.softDelete({ id });
  }
}
