import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignIn from "../signIn/SignIn";
import { createRandomCredentials } from "./__fixtures__/credentials";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("../adapters/SuperbaseClient", () => ({
  supabase: {
    auth: {
      signInWithPassword: jest.fn().mockResolvedValue({}),
      signUp: jest.fn().mockResolvedValue({}),
    },
  },
}));

describe("SigIn component", () => {
  test("render SignIn component", async () => {
    render(<SignIn />);

    const emailInput = screen.getByPlaceholderText("Email or phone number");
    const passwordInput = screen.getByPlaceholderText("Password");
    const signInButton = screen.getByRole("button", { name: "Sign In" });
    const registerButton = screen.getByText("Sign up now.");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  test("should be able to call authenticate on Sign In button click", async () => {
    render(<SignIn />);

    const { email, password } = createRandomCredentials();
    const emailInput = screen.getByPlaceholderText("Email or phone number");
    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });

    const signInButton = screen.getByRole("button", { name: "Sign In" });
    await userEvent.click(signInButton);

    expect(
      require("../adapters/SuperbaseClient").supabase.auth.signInWithPassword
    ).toHaveBeenCalledTimes(1);
    expect(
      require("../adapters/SuperbaseClient").supabase.auth.signInWithPassword
    ).toHaveBeenCalledWith({ email, password });
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });

  test("should be able to register new user on Sign up now button click", async () => {
    render(<SignIn />);

    const { email, password } = createRandomCredentials();
    const emailInput = screen.getByPlaceholderText("Email or phone number");
    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });

    const registerButton = screen.getByText("Sign up now.");
    await userEvent.click(registerButton);

    expect(
      require("../adapters/SuperbaseClient").supabase.auth.signUp
    ).toHaveBeenCalledTimes(1);
    expect(
      require("../adapters/SuperbaseClient").supabase.auth.signUp
    ).toHaveBeenCalledWith({ email, password });
  });
});
