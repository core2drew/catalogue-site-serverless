import { render } from '@testing-library/react';

import ProductCategory from './product-category';

describe('ProductCategory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductCategory />);
    expect(baseElement).toBeTruthy();
  });
});
