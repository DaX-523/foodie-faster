import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/urls.ts';
import useOnlineStatus from '../custom/useOnlineStatus';
import { FC, ReactNode } from 'react';

const HeaderComponent: FC = (): ReactNode => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="nav-bar">
      <img className="img" src={LOGO_URL} alt="logo" />
      <div className="nav-links">
        <ul>
          <li>{onlineStatus ? 'Online 🟢' : 'Offline 🔴'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
