import { NextFunction, Request, Response } from 'express';
import {
  IGetAllUsersResponse,
  IGetUserResponse,
  IUser,
} from '../types/userTypes';
// import { dummyUsers } from '../../__data__/dummy-users';
import catchAsync from '../../utils/catchAsync';
import AppError from '../../utils/appError';
import { dummyUsers } from '../../__data__/dummy-users';

export const getAllUsers = catchAsync(
  async (
    _req: Request,
    res: Response<IGetAllUsersResponse>,
    _next: NextFunction
  ) => {
    res.status(200).json({
      status: 'success',
      count: dummyUsers.length,
      data: dummyUsers,
    });
  }
);

export const getUser = catchAsync(
  async (
    req: Request<{ id: number }>,
    res: Response<IGetUserResponse>,
    next: NextFunction
  ) => {
    const user = (await dummyUsers.find((el) => {
      return el.id == req.params.id;
    })) as IUser | undefined;
    if (!user) {
      return next(
        new AppError(`There is no user associated with this id.`, 404)
      );
    }

    res.status(200).json({
      status: 'success',
      data: user,
    });
  }
);
