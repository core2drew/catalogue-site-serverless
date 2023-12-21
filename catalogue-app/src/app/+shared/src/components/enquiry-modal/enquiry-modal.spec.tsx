import { render } from '@testing-library/react';

import EnquiryModal from './enquiry-modal';

describe('EnquiryModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EnquiryModal />);
    expect(baseElement).toBeTruthy();
  });
});
