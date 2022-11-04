import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { IUser } from '../users/user.interface';
import { CreateUserDto } from 'src/users/dto/create-user-dto';
@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}

    async validateUser(userName: string, pass: string): Promise<any> {
        
        let userModel:any = {userName:userName}; 
        
        const user = await this.userService.findOne(userModel); 
        
        if (user && user.password === pass) {
             const { password, ...result} = user;
             return result;
        }
        return null
    }
}
