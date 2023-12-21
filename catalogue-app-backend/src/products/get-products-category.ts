import { Request, Response } from "express";
import { Product } from "../models/products.model";
import axios from "axios";
const baseUrl = "https://fakestoreapi.com";

async function getProductsByCategory(req: Request, res: Response) {
  const { category } = req.params;
  const url = `${baseUrl}/products/category/${category}`;

  const options = {
    method: "GET",
  };

  let response = await axios(url, options);
  let data: Array<Product> = [];

  data = response.data as Array<Product>;

  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ msg: `Internal Server Error.` });
  }
}

export default getProductsByCategory;
