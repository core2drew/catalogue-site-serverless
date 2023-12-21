import { Request, Response } from "express";
import axios from "axios";
import { ProductCategory } from "../models/products.model";

const baseUrl = "https://fakestoreapi.com";

async function getCategories(_req: Request, res: Response) {
  const url = `${baseUrl}/products/categories`;

  const options = {
    method: "GET",
  };

  let response = await axios(url, options);
  let data: Array<ProductCategory> = [];

  data = response.data as Array<ProductCategory>;

  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ msg: `Internal Server Error.` });
  }
}
export default getCategories;
