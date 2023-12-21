import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@catalogue-app/shared/components/header/header';
import { ProgressSpinner } from 'primereact/progressspinner';
import ProductCard from '@catalogue-app/shared/components/product-card/product-card';
/* eslint-disable-next-line */
export interface ProductSearchProps {}

export function ProductSearch(props: ProductSearchProps) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [noProductsFound, setNoProductsFound] = useState(false);
  const searchText = searchParams.get('searchText');

  useEffect(() => {
    setNoProductsFound(false);
    fetch(
      `https://2i9eofhh2a.execute-api.ap-southeast-1.amazonaws.com/products?search=${searchText}`
    )
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((e) => {
        setNoProductsFound(true);
      });
  }, [searchText]);

  return (
    <>
      <Header />
      <div className="p-10">
        <h1 className="text-3xl mb-5 text-center capitalize">Search Product</h1>
        {noProductsFound ? (
          <h2 className="text-center">No products found</h2>
        ) : (
          <div className="flex flex-wrap gap-5 justify-center">
            {loading ? (
              <ProgressSpinner />
            ) : (
              products.map(({ id, title, price, image, rating, category }) => (
                <ProductCard
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  image={image}
                  rating={rating}
                  category={category}
                />
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default ProductSearch;
