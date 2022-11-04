import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { PostsController } from './posts.controller';
import { postsProviders } from './posts.providers';
import { PostsService } from './posts.service';
import { Post as IPost} from './interfaces/posts.interface';

describe('PostsController', () => {
  let postController: PostsController;
  let postsService:PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[DatabaseModule],
      controllers: [PostsController],
      providers: [PostsService, ...postsProviders],
    }).compile();

    postController = module.get<PostsController>(PostsController);
    postsService = module.get<PostsService>(PostsService);
  });

  describe('findAll', () =>{
    it('should return an array of posts', async () =>{
      var result:IPost[] = [];
      jest.spyOn(postsService, 'findAll').mockImplementation(async () => result );
      expect(await postController.findAll()).toBe(result);
    })
  })

  describe('findOne', () =>{
    it('should return nothing if the post does not exists ', async () =>{
      var result:IPost; 
      jest.spyOn(postsService, 'findOne').mockImplementation(async () => result );
      expect(await postController.findOne("sdfa")).toBeUndefined;
    })
  })
});
