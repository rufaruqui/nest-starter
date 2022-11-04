import { Inject, Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
import {Model} from 'mongoose';
import {CreateUserDto} from './dto/create-user-dto';

@Injectable()
export class UsersService {
    constructor(@Inject('USER_MODEL') private readonly userModel: Model<IUser>){}

    async create(createPostDto: CreateUserDto): Promise<IUser> {
        return this.userModel.create(createPostDto);
      }

    async findOne(query: CreateUserDto):Promise<IUser> {
        console.log("service", query);
        return this.userModel.findOne(query, {_id:0, __v:0})
      }
}
