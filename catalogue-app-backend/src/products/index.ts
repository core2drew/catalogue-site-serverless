import express, { NextFunction, Request, Response } from "express";

import getProductsByCategory from "./get-products-category";
import getProducts from "./get-products";
import getFeatureProducts from "./get-featured-products";
import getProductById from "./get-product";
import getCategories from "./get-categories";

const router = express.Router();

router.use((_req: Request, _res: Response, next: NextFunction) => {
  next();
});

router.get("/", getProducts);

router.get("/featured", getFeatureProducts);

router.get("/category/:category", getProductsByCategory);

router.get("/:id", getProductById);

router.get("/categories", getCategories);

export default router;
