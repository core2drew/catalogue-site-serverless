import { Request, Response } from "express";
import axios from "axios";
import { Product } from "../models/products.model";

const baseUrl = "https://fakestoreapi.com";

async function getFeatureProducts(_req: Request, res: Response) {
  const url = `${baseUrl}/products`;

  const options = {
    method: "GET",
  };
  const featureProducts = parseInt(_req.query.featureProducts as string);
  let response = await axios(url, options);
  let data: Array<Product> = [];
  let limit = featureProducts || 5;

  data = response.data as Array<Product>;

  data = data.filter(({ rating }) => rating.rate >= 4).slice(0, limit);

  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ msg: `Internal Server Error.` });
  }
}

export default getFeatureProducts;
