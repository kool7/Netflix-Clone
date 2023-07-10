import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Profile from "../../../profile/Profile";
import { createRandomUser } from "../../__fixtures__/user";
import ReduxWrapper from "../../utility/ReduxWrapper";

const useSelectorMock = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: useSelectorMock,
}));

jest.mock("../../../features/userSlice", () => ({
  selectUser: useSelectorMock,
}));

describe("Profile component", () => {
  test("renders user email correctly", () => {
    const user = createRandomUser();
    useSelectorMock.mockReturnValue(user);

    render(
      <ReduxWrapper>
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      </ReduxWrapper>
    );
  });
});
