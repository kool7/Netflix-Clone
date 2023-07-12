import { render, screen } from "@testing-library/react";
import Login from "../../../login/Login";
import { LOGIN } from "../../utility/helper";

describe("Login component", () => {
  test("renders Login component with logo, email field, Sign In & GET STARTED button", () => {
    render(<Login />);

    const signInButton = screen.getByText(LOGIN.signInButton);
    const logo = screen.getByAltText(LOGIN.netflixLogo);
    const getStartedButton = screen.getByText(LOGIN.getStartedButton);
    const emailInput = screen.getByPlaceholderText(LOGIN.emailAddressField);

    expect(signInButton).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(getStartedButton).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });
});
