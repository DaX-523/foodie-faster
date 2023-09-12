import HeaderComponent from './components/Header';
import { Outlet } from 'react-router-dom';
import cartStore from './utils/cartStore';
import { Provider } from 'react-redux';

// Top level component
export const AppComponent = () => {
  return (
    <Provider store={cartStore}>
      <div className="home">
        <HeaderComponent />
        <Outlet />
      </div>
    </Provider>
  );
};
