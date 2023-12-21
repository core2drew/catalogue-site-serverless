import { useEffect, useState } from 'react';
import ProductCard from '@catalogue-app/shared/components/product-card/product-card';
import { useParams } from 'react-router-dom';
import Header from '@catalogue-app/shared/components/header/header';
import { ProgressSpinner } from 'primereact/progressspinner';
/* eslint-disable-next-line */
export interface ProductCategoryProps {}

export function ProductCategory(props: ProductCategoryProps) {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://2i9eofhh2a.execute-api.ap-southeast-1.amazonaws.com/products/category/${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, [category]);

  return (
    <>
      <Header />
      <div className="p-10">
        <h1 className="text-3xl mb-5 text-center capitalize">
          {category} Product
        </h1>
        <div className="flex flex-wrap gap-5 justify-center">
          <>
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
          </>
        </div>
      </div>
    </>
  );
}

export default ProductCategory;
