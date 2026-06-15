import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/app.error";

export const genericErrorHandler = (
  err: AppError,
  request: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(501).json({
    success: false,
    message: err.message,
  });
};
