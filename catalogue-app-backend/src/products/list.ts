import express, { Request, Response } from "express";
import axios from "axios";
import { Product } from "../models/products.model";
const router = express.Router();

router.get("/", async function (_req: Request, res: Response) {
  const url = "https://fakestoreapi.com/products";

  const options = {
    method: "GET",
  };
  const featureProducts = parseInt(_req.query.featureProducts as string);
  let response = await axios(url, options);
  let data: Array<Product> = [];
  let limit = 5;

  data = response.data as Array<Product>;

  if (featureProducts) {
    limit = featureProducts;
    data = data.filter(({ rating }) => rating.rate >= 4).slice(0, limit);
  }

  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ msg: `Internal Server Error.` });
  }
});

export default router;
