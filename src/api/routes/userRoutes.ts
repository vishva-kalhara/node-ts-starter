import { Router } from 'express';
import { getAllUsers, getUser } from '../handlers/userHandler';

const userRouter = Router();

userRouter.route('/').get(getAllUsers);
userRouter.route('/:id').get(getUser);

export default userRouter;
