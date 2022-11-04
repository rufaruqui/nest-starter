import { Mongoose } from 'mongoose';
import { UserSchema } from './user.schema';

export const usersProvider = [
  {
    provide: 'USER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
