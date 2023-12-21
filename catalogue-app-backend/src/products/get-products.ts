import { Request, Response } from "express";
import axios from "axios";
import { Product } from "../models/products.model";

const baseUrl = "https://fakestoreapi.com";

async function getProducts(req: Request, res: Response) {
  const url = `${baseUrl}/products`;

  const options = {
    method: "GET",
  };
  const searchText = req.query.search;
  let response = await axios(url, options);
  let data: Array<Product> = [];

  data = response.data as Array<Product>;

  if (searchText) {
    data = data.filter(({ title }) =>
      title.toLowerCase().includes((searchText as string).toLowerCase().trim())
    );
  }

  try {
    if (data.length > 0) {
      res.status(200).json(data);
    } else {
      res.status(200).send("No product(s) found");
    }
  } catch (err) {
    res.status(500).json({ msg: `Internal Server Error.` });
  }
}

export default getProducts;
