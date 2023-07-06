import { render, screen } from "@testing-library/react";
import Navigation from "../navigation/Navigation";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Navigation component", () => {
  test("render Navigation component with Netflix logo and avatar", () => {
    render(<Navigation />);

    const logo = screen.getByAltText("Netflix logo");
    expect(logo).toBeInTheDocument();

    const avatar = screen.getByAltText("Avatar");
    expect(avatar).toBeInTheDocument();
  });

  test("navigate to home route when netflix logo is clicked", () => {
    render(<Navigation />);

    const logo = screen.getByAltText("Netflix logo");
    logo.click();

    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });

  test("navigate to profile route when avatar is clicked", () => {
    render(<Navigation />);

    const avatar = screen.getByAltText("Avatar");
    avatar.click();

    expect(mockedUsedNavigate).toHaveBeenCalledWith("/profile");
  });
});
