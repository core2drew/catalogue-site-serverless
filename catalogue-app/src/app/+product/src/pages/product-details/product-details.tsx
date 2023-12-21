import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@catalogue-app/shared/components/header/header';

import FormatUtil from '@catalogue-app/shared/utils/format-utils';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { EnquiryModal } from '@catalogue-app/shared/components/enquiry-modal/enquiry-modal';
import { Toast } from 'primereact/toast';
/* eslint-disable-next-line */
export interface ProductDetailsProps {}

export function ProductDetails(props: ProductDetailsProps) {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [enquiryVisible, setEnquiryVisble] = useState(false);
  useEffect(() => {
    fetch(
      `https://2i9eofhh2a.execute-api.ap-southeast-1.amazonaws.com/products/${id}`
    )
      .then((res) => res.json())
      .then((json) => {
        setProductDetails(json);
        setLoading(false);
      });
  }, [id]);
  const toast = useRef<Toast>(null);

  const showSuccess = (message: string) => {
    toast.current?.show({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 2000,
    });
  };
  return (
    <>
      <Header />
      <div className="mt-5 max-w-5xl m-auto">
        {loading ? (
          <ProgressSpinner className="block m-auto" />
        ) : (
          <>
            <h2 className="text-3xl mb-10">{productDetails.title}</h2>
            <div className="flex gap-20">
              <img
                className="max-w-xs mb-10 flex-grow"
                alt={productDetails.title}
                src={productDetails.image}
              />
              <div>
                <h2 className="text-3xl font-bold mb-5">
                  {FormatUtil.formatToCurrency(productDetails.price)}
                </h2>
                <div className="flex items-center gap-3 mb-5">
                  <Rating
                    className="ml-auto"
                    value={productDetails.rating?.rate}
                    disabled
                    cancel={false}
                  />
                  <span>{productDetails.rating?.count} Rating</span>
                </div>
                <Button
                  label="Enquire"
                  onClick={() => setEnquiryVisble(true)}
                />
              </div>
            </div>

            <div className="flex">
              <div>
                <div className="flex items-center"></div>
                <p>{productDetails.description}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <EnquiryModal
        visible={enquiryVisible}
        handleClose={() => setEnquiryVisble(false)}
        handleSuccessSend={(message) => showSuccess(message)}
      />
      <Toast ref={toast} position="bottom-center" />
    </>
  );
}

export default ProductDetails;
