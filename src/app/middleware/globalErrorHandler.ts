/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */
import exp from 'constants';
import e, { ErrorRequestHandler, Request, Response } from 'express';
import { NextFunction } from 'express';
import path from 'path';
import { ZodError, ZodIssue } from 'zod';
import { TerrorSource } from '../../interface/errors';
import config from '../utils/config';
import handleZodError from '../errors/handleZodErrors';
import handleValidationError from '../errors/handleValidationError';
import handleCastError from '../errors/handleCastError';
import handleDuplicateError from '../errors/handleDuplicateError';
import AppError from '../errors/AppError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';



  let errorSources: TerrorSource = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];





  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    // console.log(simplifiedError)
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }else if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err.message;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err.message;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  }



  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack : config.NODE_ENV == 'development' ? err?.stack :  null
  });
};

export default globalErrorHandler;
