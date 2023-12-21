import express, { NextFunction, Request, Response } from "express";
import sendEnquiry from "./send-enquiry";

const router = express.Router();

router.use((_req: Request, _res: Response, next: NextFunction) => {
  next();
});

router.post("/", sendEnquiry);

export default router;
