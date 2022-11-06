import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common'; 
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from  './auth/local-auth.guard';
import  {AuthGuard} from '@nestjs/passport';
import { IUser } from './users/user.interface';
import { UsersService } from './users/users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from './app.service';
@Controller('')
@ApiTags('Authorization -- User signin and signup')
export class AppController {
  constructor(private readonly authService: AuthService, private readonly usersService: UsersService) {}
  
  // @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiOperation({ summary: 'Authenticate a User' })
  async login(@Request() req: any) {
    return this.authService.login(req.user)
  } 

  @Post('auth/signup')
  @ApiOperation({ summary: 'Signup a User' })
  @ApiResponse({ status: 200, description: 'A user has been created' })
  async create(@Body() createUserDto: IUser) {
    return this.usersService.create(createUserDto);
  }


}
