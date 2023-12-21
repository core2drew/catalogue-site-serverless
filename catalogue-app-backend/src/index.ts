import express, { Request, Response } from "express";
import serverless from "serverless-http";
import productRoutes from "./products";
import enquiryRoutes from "./enquiry";
import cors from "cors";
const app = express();

app.use(cors());

app.use(express.json());

app.use("/products", productRoutes);
app.use("/send-enquiry", enquiryRoutes);

app.use((_req: Request, res: Response) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
