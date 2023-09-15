import { FC, ReactNode } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact: FC = (): ReactNode => {
  return (
    <div className="text-center m-auto p-4">
      <h1 className=" font-bold text-yellow-400 text-4xl">Contacts</h1>
      <h4 className="text-blue-600 my-4">
        <EmailIcon /> dakshdhama0502@gmail.com
      </h4>
      <h4 className="text-blue-600 my-4">
        <LocalPhoneIcon /> +91 9351217522
      </h4>
    </div>
  );
};

export default Contact;
