import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    debugger;
    const newUser = this.userModel.create(createUserDto);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find({}, { _id: 1, name: 1, address: 1 });
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById({ _id: id }).exec();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string): Promise<any>  {
   return this.userModel.deleteOne({_id:id})
  }
}
