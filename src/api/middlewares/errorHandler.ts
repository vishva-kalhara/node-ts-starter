import { NextFunction, Request, Response } from 'express';
import AppError from '../../utils/appError';

const sendErrorDev = (err: AppError, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: { ...err, name: err.name },
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err: AppError, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error('Error 💥💥', err);
    res.status(500).json({
      status: 'error',
      message: err.message || 'Something went wrong. Please try again later.',
    });
  }
};

export default (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let error = err;
  error.statusCode = err.statusCode || 500;
  error.status = err.status || 'error';
  if ((process.env.NODE_ENV as string) === 'production') {
    return sendErrorProd(error, res);
  }
  return sendErrorDev(error, res);
};
