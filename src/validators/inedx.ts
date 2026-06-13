import { Response, Request, NextFunction } from "express";
import { ZodObject } from "zod";
export const validateRequestBody = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      console.log("Request body is valid");
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Invalid request body",
        success: "false",
      });
    }
  };
};
