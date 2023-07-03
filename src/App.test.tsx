import { render, screen } from '@testing-library/react';
import App from './App';
import ReduxWrapper from './ReduxWrapper';

test('renders learn react link', () => {
  render(<ReduxWrapper> <App /> </ReduxWrapper>);
  const linkElement = screen.getByText(/learn react/);
  expect(linkElement).toBeInTheDocument();
});
