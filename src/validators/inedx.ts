import { Response, Request, NextFunction } from "express";
import { ZodObject } from "zod";
import logger from "../config/logger.config";
export const validateRequestBody = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info("Validating RequestBody");
      await schema.parseAsync(req.body);
      logger.info("Request Body is valid");
      next();
    } catch (error) {
      res.status(400).json({
        message: "Invalid request body",
        success: "false",
      });
    }
  };
};

export const validateQueryParams = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.query);
      console.log("Request body is valid");
      next();
    } catch (error) {
      res.status(400).json({
        message: "Invalid request body",
        success: "false",
      });
    }
  };
};
