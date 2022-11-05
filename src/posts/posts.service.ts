import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './interfaces/posts.interface';
import {Model} from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@Inject('POST_MODEL') private readonly postModel: Model<Post>){}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    return this.postModel.create(createPostDto);
  }

  async findAll(): Promise<Post[]> {
    return  this.postModel.find({}).exec();
  }

  async findOne(id: string):Promise<Post> {
    return this.postModel.findOne({_id:id}).exec();
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return this.postModel.updateOne(updatePostDto).exec();
  }

  async remove(id: string) {
    return this.postModel.deleteOne({_id:id}).exec();
  }
}
