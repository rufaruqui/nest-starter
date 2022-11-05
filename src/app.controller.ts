import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common'; 
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from  './auth/local-auth.guard';
import  {AuthGuard} from '@nestjs/passport';
import { IUser } from './users/user.interface';
@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
  


  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user)
  } 
}
