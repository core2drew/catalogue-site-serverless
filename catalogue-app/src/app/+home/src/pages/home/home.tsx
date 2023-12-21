import { useEffect, useState } from 'react';
import styles from './home.module.scss';
import Header from '@catalogue-app/shared/components/header/header';
import ProductCard from '@catalogue-app/shared/components/product-card/product-card';
/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      'https://2i9eofhh2a.execute-api.ap-southeast-1.amazonaws.com/products/featured'
    )
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className={styles['container']}>
      <Header />
      <div className="p-10">
        <h1 className="text-3xl mb-5 text-center">Feature Products</h1>
        <div className="flex gap-5 justify-center">
          {products.map(({ id, title, price, image, rating, category }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              image={image}
              rating={rating}
              category={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
