import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import cartStore from '../utils/cartStore';
import { BrowserRouter } from 'react-router-dom';

const useOnlineStatusMock = jest.fn();

import HeaderComponent from '../components/Header';

jest.mock('../custom/useOnlineStatus', () => ({
  __esModule: true,
  default: useOnlineStatusMock
}));

describe('header component tests', () => {
  it('should render the header component into view', () => {
    render(
      <BrowserRouter>
        <Provider store={cartStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );

    const header: HTMLElement = screen.getByTestId('header');

    expect(header).toBeInTheDocument();
  });

  it('should display the company logo in the header', () => {
    render(
      <BrowserRouter>
        <Provider store={cartStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );

    const image: HTMLImageElement = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });

  it('should update the onlineStatus value for when internet is online', () => {
    useOnlineStatusMock.mockReturnValue(true);
    render(
      <BrowserRouter>
        <Provider store={cartStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );

    const onlineStatus = screen.getByText(/Online/);

    expect(onlineStatus).toBeInTheDocument();
  });

  it('should update the onlineStatus value for when internet is offline', () => {
    useOnlineStatusMock.mockReturnValueOnce(false);

    render(
      <BrowserRouter>
        <Provider store={cartStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );

    const onlineStatus = screen.getByText(/Offline/);

    expect(onlineStatus).toBeInTheDocument();
  });

  it('should render the cart icon component from material ui', () => {
    render(
      <BrowserRouter>
        <Provider store={cartStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );

    const cartIcon = screen.getByTestId('ShoppingCartOutlinedIcon');
    expect(cartIcon).toBeInTheDocument();

    const cartItemsBadge = cartIcon.nextSibling;

    expect(cartItemsBadge).toBeInTheDocument();

    expect(cartItemsBadge).toHaveTextContent('0');
  });
});
