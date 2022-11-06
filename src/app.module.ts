import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@nestjs/core/router/router-module'; 
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    PostsModule, 
    AuthModule, 
    UsersModule, 
    RouterModule.register([
        { path:'users',  module: UsersModule }, 
        { path: 'posts', module: PostsModule}
      ]), 
],
  controllers: [AppController],
  providers: [AppService,  
  //   {
  //   provide: APP_GUARD,
  //   useClass: JwtAuthGuard,
  // },
],
})
export class AppModule {}
