import { render, screen } from '@testing-library/react';
import App from './App';
import ReduxWrapper from './ReduxWrapper';

describe('App', () => {
  test('renders the login page when there is no user', () => {
    render(<ReduxWrapper> <App /> </ReduxWrapper>);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: "Sign In"})).toBeInTheDocument();
  });

  // test('renders SignIn component when sign In button is clicked', async () => {
  //   userEvent.setup();
  //   render(<ReduxWrapper> <App /> </ReduxWrapper>);

  //   const signInButton = screen.getByRole('button', {name: "Sign In"});
  //   await userEvent.click(signInButton);

  //   expect(screen.getByTestId('sign-in-component')).toBeInTheDocument();
  // });
});