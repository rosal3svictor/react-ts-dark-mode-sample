import userEvent from '@testing-library/user-event';
import { render, screen } from './utils';
import App from './App';

describe('Change Theme Functionality Is Working Properly', () => {
  const performRender = () => render(<App />);

  describe('Conditions when app is launched', () => {
    it('The main app container is defined with "light theme" by default', () => {
      performRender();
      const mainContainer = screen.getByTestId('main-container');
      expect(mainContainer).toHaveClass('light-theme');
    });

    it('React Logo is on its "light version"', () => {
      performRender();
      const image = screen.getByRole('img', { name: 'light' });

      expect(image).toBeInTheDocument();
    });

    it('The "Change Theme Button" contains the expected initial text', () => {
      performRender();
      const button = screen.getByRole('button');

      expect(button).toHaveTextContent('Change to dark theme');
    });
  });

  it('When button is clicked, theme is set to dark', () => {
    performRender();
    const user = userEvent.setup();
    const button = screen.getByRole('button');
    user.click(button);

    expect(button).toHaveTextContent('Change to dark theme');
  });
});
