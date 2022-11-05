import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { IUser } from '../users/user.interface';
import { CreateUserDto } from 'src/users/dto/create-user-dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService:JwtService){}

    async validateUser(userName: string, pass: string): Promise<any> {
        
        let userModel:any = {userName:userName}; 
        
        const user = await this.userService.findOne(userModel); 
        
        if (user && user.password === pass) {
             const { password, ...result} = user;
             return result;
        }
        return null
    }

    async login(user: any) {
        let payload = {user:user.userName, sub:user._id}
        return { access_token: this.jwtService.sign(payload) };
    }
}
