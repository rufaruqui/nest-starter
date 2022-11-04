import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { DatabaseModule } from '../database/database.module';
import { postsProviders } from './posts.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [PostsController],
  providers: [PostsService, ...postsProviders]
})
export class PostsModule {}
