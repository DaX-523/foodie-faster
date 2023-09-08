import HeaderComponent from './components/Header';
import { Outlet } from 'react-router-dom';

// Top level component
export const AppComponent = () => {
  return (
    <div className="home">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};
