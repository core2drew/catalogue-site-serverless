import { Card } from 'primereact/card';
import FormatUtils from '@catalogue-app/shared/utils/format-utils';
import { NavLink } from 'react-router-dom';
import { Rating } from 'primereact/rating';
/* eslint-disable-next-line */
export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
}

export function ProductCard({
  id,
  title: name,
  price,
  image,
  rating: { rate },
  category,
}: ProductCardProps) {
  const header = (
    <img alt={name} src={image} className="max-h-60 object-cover" />
  );
  const title = <p className="text-lg truncate">{name}</p>;
  return (
    <NavLink to={`/products/${category}/${id}`}>
      <Card
        className="w-80 h-full"
        title={title}
        subTitle={FormatUtils.formatToCurrency(price)}
        header={header}
      >
        <Rating className="ml-auto" value={rate} disabled cancel={false} />
      </Card>
    </NavLink>
  );
}

export default ProductCard;
