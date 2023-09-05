import { LOGO_URL } from '../utils/urls';

const HeaderComponent = () => {
  return (
    <div className="nav-bar">
      <img className="img" src={LOGO_URL} alt="logo" />
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
