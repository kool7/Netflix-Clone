import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignIn from "./SignIn";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('../adapters/SuperbaseClient', () => ({
  supabase: {
    auth: {
      signInWithPassword: jest.fn().mockResolvedValue({}),
    },
  },
}));

describe('SigIn', () => {
  test('render SignIn component', async () => {
    render(<SignIn />);

    const emailInput = screen.getByPlaceholderText('Email or phone number');
    const passwordInput = screen.getByPlaceholderText('Password');
    const signInButton = screen.getByRole('button', { name: "Sign In" });
    const registerButton = screen.getByText('Sign up now.');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  test('should be able to call authenticate on button Sign In click', async () => {
    render(<SignIn/>);

    const emailInput = screen.getByPlaceholderText('Email or phone number');
    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const signInButton = screen.getByRole('button', { name: "Sign In" });
    await userEvent.click(signInButton);

    expect(require('../adapters/SuperbaseClient').supabase.auth.signInWithPassword).toHaveBeenCalledTimes(1);
    expect(require('../adapters/SuperbaseClient').supabase.auth.signInWithPassword).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });
});
