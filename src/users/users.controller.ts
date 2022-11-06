import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Public } from 'src/app.service';

@Controller()  
@ApiTags('Users ~ Access to all operations on users.')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
 
  //@Public()
  @Post()
  @ApiOperation({ summary: 'Create a User' })
  @ApiResponse({ status: 200, description: 'A user has been created' })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

 
  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Find all the users' })
  @ApiResponse({ status: 200, description: 'All users', type: 'User[]' })
  async findAll() {
    return this.usersService.findAll();
  }

//   @Get(':id')
//   @ApiOperation({ summary: `Find a user with {id}` })
//   @ApiResponse({
//     status: 200,
//     description: 'Return the user with ${id}',
//     type: 'User',
//   })

//   async findOne(@Param('id') id: string) {
//     return this.usersService.findOne(id);
//   }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: `Update the user with user with {id}` })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: `Delete the user with {id} if available` })
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
