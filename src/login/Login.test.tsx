import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  test('renders Sign In button', () => {
    render(<Login />);
    const signInButton = screen.getByText('Sign In');
    expect(signInButton).toBeInTheDocument();
  });

  test('renders GET STARTED button', () => {
    render(<Login />);
    const signInButton = screen.getByText('GET STARTED');
    expect(signInButton).toBeInTheDocument();
  });

  // test('clicking on Sign In button shows SignIn component', async () => {
  //   const user = userEvent.setup();
  //   render(<Login />);
  //   const signInButton = screen.getByText('Sign In');

  //   act(async () => {
  //     await user.click(signInButton);
  //   });

  //   const signInComponent = screen.getByTestId('sign-in-component');
  //   expect(signInComponent).toBeInTheDocument();
  // });
});
