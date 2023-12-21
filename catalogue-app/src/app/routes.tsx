import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './+home/src/pages/home/home';
import Product from './+product/src/pages/product';
import ProductCategory from './+product/src/pages/product-category/product-category';
import ProductDetails from './+product/src/pages/product-details/product-details';
import ProductSearch from './+product/src/pages/product-search/product-search';

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />}></Route>
      <Route path="/products" element={<Product />}>
        <Route index element={<ProductSearch />} />
        <Route path={`/products/:category`} element={<ProductCategory />} />
        <Route path={`/products/:category/:id`} element={<ProductDetails />} />
      </Route>
    </Route>
  )
);
