import { Request, Response } from "express";
export const pingHandler = (req: Request, res: Response) => {
  console.log("request body", req.body);
  console.log("query params", req.query);
  res.send("Pong");
};
