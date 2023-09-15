import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import MOCK_DATA from '../utils/mocks/resListDataMock.json';

const useOnlineStatusMock = jest.fn();

import BodyComponent from '../components/Body';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  })
) as jest.Mock;

jest.mock('../custom/useOnlineStatus', () => ({
  __esModule: true,
  default: useOnlineStatusMock
}));

describe('body component tests', () => {
  beforeEach(() => {
    useOnlineStatusMock.mockReturnValue(true);
  });
  it('should render the body component with initial restaurant cards', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <BodyComponent />
        </BrowserRouter>
      );
    });
    const resCards = screen.getAllByTestId('resCard');

    expect(resCards?.length).toBe(20);
  });

  it('should render a message to show if user is offline', async () => {
    useOnlineStatusMock.mockReturnValue(false);
    await act(async () => {
      render(
        <BrowserRouter>
          <BodyComponent />
        </BrowserRouter>
      );
    });

    const offlineMessage = screen.getByText(
      'Looks like your connection was lost. Please check your internet connection!'
    );

    expect(offlineMessage).toBeInTheDocument();
  });
});
