import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {DatabaseModule} from '../database/database.module';
import { usersProviders } from './users.providers';
import { User } from './entities/user.entity';
import {User as IUser} from './interfaces/user.interface';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService:UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [UsersController],
      providers: [UsersService, ...usersProviders],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);

  });

  describe('findAll', () =>{
    it('should return an array of users', async () =>{
      var result:IUser[] = [];
      jest.spyOn(usersService, 'findAll').mockImplementation(async () => result );
      expect(await usersController.findAll()).toBe(result);
    })
  })

  describe('findOne', () =>{
    it('should return nothing if user does not exists ', async () =>{
      var result:IUser; 
      jest.spyOn(usersService, 'findOne').mockImplementation(async () => result );
      expect(await usersController.findOne("sdfa")).toBeUndefined;
    })
  })

  // it('findALL should be return 4 users', () => {
  //   expect(usersController.findAll()).toBeInstanceOf(Promise<any[]>);
  // });
});
