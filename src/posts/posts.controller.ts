import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
//import { AppService } from 'src/app.service';

@Controller('posts')
@ApiTags('Posts ~ Access to all operations on posts.')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a Post' })
  @ApiResponse({ status: 200, description: 'A post has been created' })
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all the posts' })
  @ApiResponse({ status: 200, description: 'All posts', type: 'Post[]' })
  async findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: `Find a post with {id}` })
  @ApiResponse({
    status: 200,
    description: 'Return the user with ${id}',
    type: 'Post',
  })
  async findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: `Delete the post with {id} if available` })
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
