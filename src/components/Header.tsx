import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/urls.ts';
import useOnlineStatus from '../custom/useOnlineStatus';
import { FC, ReactNode } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { useSelector } from 'react-redux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';

const HeaderComponent: FC = (): ReactNode => {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store: any) => store.cart.items);

  return (
    <div
      className="flex justify-between items-center bg-yellow-400"
      data-testid="header"
    >
      <img className="w-40" src={LOGO_URL} alt="logo" />

      <ul className="flex justify-between flex-row">
        <li className="m-2 p-2 font-semibold">
          {onlineStatus ? 'Online 🟢' : 'Offline 🔴'}
        </li>
        <li className="m-2 p-2 font-semibold hover:bg-yellow-500 rounded-md">
          <Link to="/">Home</Link>
        </li>
        <li className="m-2 p-2 font-semibold hover:bg-yellow-500 rounded-md">
          <Link to="/about">About Us</Link>
        </li>
        <li className="m-2 p-2 font-semibold hover:bg-yellow-500 rounded-md">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="m-2 p-2 hover:bg-yellow-500 rounded-lg">
          <Link to="/cart">
            <Badge badgeContent={cartItems.length || '0'} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Link>
        </li>
        <li className="m-2 p-2 hover:bg-yellow-500 rounded-lg">
          <LoginIcon />
        </li>
      </ul>
    </div>
  );
};

export default HeaderComponent;
