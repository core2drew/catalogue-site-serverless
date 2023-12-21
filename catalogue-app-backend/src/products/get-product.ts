import { Request, Response } from "express";
import { Product } from "../models/products.model";
import axios from "axios";
const baseUrl = "https://fakestoreapi.com";

async function getProductById(req: Request, res: Response) {
  const { id } = req.params;

  const url = `${baseUrl}/products/${id}`;

  const options = {
    method: "GET",
  };

  let response = await axios(url, options);
  let data: Product;

  data = response.data as Product;

  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ msg: `Internal Server Error.` });
  }
}
export default getProductById;
