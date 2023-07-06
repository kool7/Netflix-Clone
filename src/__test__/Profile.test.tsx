import { fireEvent, render, screen } from "@testing-library/react";
import { supabase } from "../adapters/SuperbaseClient";
import Profile from "../profile/Profile";
import ReduxWrapper from "./utility/ReduxWrapper";

const mockUseNavigate = jest.fn();
const mockUseSelector = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockUseNavigate,
  useSelector: () => mockUseSelector,
}));

describe("Profile component", () => {
  const mockUser = {
    email: "test@example.com",
  };

  beforeEach(() => {
    mockUseSelector.mockReturnValue(mockUser);
    mockUseNavigate.mockReturnValue(jest.fn());
    supabase.auth.signOut = jest.fn();
  });

  test("renders user email correctly", () => {
    render(<Profile />);
    const emailElement = screen.getByText(mockUser.email);
    expect(emailElement).toBeInTheDocument();
  });

  test("calls supabase.auth.signOut on button click", () => {
    render(<ReduxWrapper>
      <Profile/>
    </ReduxWrapper>);
    const signOutButton = screen.getByText("Sign Out");
    fireEvent.click(signOutButton);
    expect(supabase.auth.signOut).toHaveBeenCalledTimes(1);
  });
});
