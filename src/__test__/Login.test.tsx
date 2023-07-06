import { render, screen } from "@testing-library/react";
import Login from "../login/Login";

describe("Login component", () => {
  test("renders Login component with logo, email field,Sign In & GET STARTED button", () => {
    render(<Login />);

    const signInButton = screen.getByText("Sign In");
    const logo = screen.getByAltText("Netflix_Logo");
    const getStartedButton = screen.getByText("GET STARTED");
    const emailInput = screen.getByPlaceholderText('Email address');

    expect(signInButton).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(getStartedButton).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });
});
