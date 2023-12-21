import { InputText } from 'primereact/inputtext';

import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
/* eslint-disable-next-line */
export interface EnquiryModalProps {
  visible?: boolean;
  handleClose: () => void;
  handleSuccessSend: (message: string) => void;
  productId?: number;
}

export function EnquiryModal({
  visible,
  productId,
  handleClose,
  handleSuccessSend,
}: EnquiryModalProps) {
  const { id } = useParams();
  const initialFormValue = {
    id,
    name: '',
    contactNo: '',
    message: '',
  };
  const [form, setForm] = useState(initialFormValue);

  const handleSendEnquiry = () => {
    fetch(
      'https://2i9eofhh2a.execute-api.ap-southeast-1.amazonaws.com/send-enquiry',
      {
        method: 'POST',
      }
    )
      .then((res) => res.json())
      .then(({ message }) => {
        handleClose();
        handleSuccessSend(message);
      });
  };

  return (
    <Dialog
      visible={visible}
      header="Send enquiry"
      onHide={() => setForm(initialFormValue)}
      closable={false}
      className="w-72"
    >
      <div className="flex flex-col gap-5">
        <InputText
          placeholder="Name"
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />
        <InputText
          placeholder="Contact No."
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              contactNo: e.target.value,
            }))
          }
        />
        <InputTextarea
          placeholder="Message"
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              message: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex mt-5 justify-end gap-5">
        <Button label="Cancel" onClick={handleClose} />
        <Button label="Send" onClick={handleSendEnquiry} />
      </div>
    </Dialog>
  );
}

export default EnquiryModal;
