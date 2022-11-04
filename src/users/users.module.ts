import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database/database.module';
import {usersProvider} from './users.provider';
@Module({
  imports:[DatabaseModule],
  providers: [UsersService, ...usersProvider],
  exports:[UsersService]
})
export class UsersModule {}
