import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/urls.ts';
import useOnlineStatus from '../custom/useOnlineStatus';
import { FC, ReactNode } from 'react';
import LoginIcon from '@mui/icons-material/Login';

const HeaderComponent: FC = (): ReactNode => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-yellow-400">
      <img className="w-40" src={LOGO_URL} alt="logo" />

      <ul className="flex justify-between flex-row">
        <li className="m-2 p-2">{onlineStatus ? 'Online 🟢' : 'Offline 🔴'}</li>
        <li className="m-2 p-2">
          <Link to="/">Home</Link>
        </li>
        <li className="m-2 p-2">
          <Link to="/about">About Us</Link>
        </li>
        <li className="m-2 p-2">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="m-2 p-2">Cart</li>
        <li className="m-2 p-2">
          <LoginIcon />
        </li>
      </ul>
    </div>
  );
};

export default HeaderComponent;
