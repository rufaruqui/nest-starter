import { Inject, Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
import {Model} from 'mongoose';
import {CreateUserDto} from './dto/create-user-dto';
import {UpdateUserDto} from './dto/update-user-dto';
@Injectable()
export class UsersService {
    constructor(@Inject('USER_MODEL') private readonly userModel: Model<IUser>){}

    async create(createUserDto: CreateUserDto): Promise<IUser> {
        return this.userModel.create(createUserDto);
      }

    async findOne(query: CreateUserDto):Promise<IUser> { 
        return this.userModel.findOne(query, {__v:0}).exec();
      }

      async findAll(): Promise<IUser[]> {
        return  this.userModel.find({}).exec();
      }
    
      async update(id: number, updateUserDto: UpdateUserDto) {
        return this.userModel.updateOne(updateUserDto).exec();
      }
    
      async remove(id: string) {
        return this.userModel.deleteOne({_id:id}).exec();
      }
}
