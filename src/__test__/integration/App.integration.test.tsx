import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import App from "../../App";
import userReducer, { login } from "../../features/userSlice";
import { createRandomUser } from "../__fixtures__/user";
import { HOME, INITIAL_STATE, LOGIN, SIGNIN } from "../utility/helper";

jest.mock("../../adapters/SuperbaseClient", () => ({
  supabase: {
    auth: {
      onAuthStateChange: jest.fn().mockResolvedValue({}),
    },
  },
}));

describe("App component integration test", () => {
  let store: EnhancedStore;

  beforeEach(() => {
    store = configureStore({
      reducer: { user: userReducer },
      preloadedState: INITIAL_STATE,
    });
  });

  test("renders Login component when user is not logged in", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText(LOGIN.getStartedButton)).toBeInTheDocument();
    expect(screen.getByText(LOGIN.signInButton)).toBeInTheDocument();
  });

  test("renders SignIn component when Sign In or GET STARTED buttons are clicked", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const sigInButton = screen.getByText(LOGIN.getStartedButton);
    const getStartedButton = screen.getByText(LOGIN.signInButton);

    await userEvent.click(sigInButton);
    await userEvent.click(getStartedButton);

    expect(
      screen.getByPlaceholderText(SIGNIN.emailOrPhoneNumber)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(SIGNIN.password)).toBeInTheDocument();
  });

  test("renders Home component when user is logged in", async () => {
    const user = createRandomUser();
    store.dispatch(login(user));

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      expect(
        require("../../adapters/SuperbaseClient").supabase.auth
          .onAuthStateChange
      ).toHaveBeenCalledTimes(1);
    });
    expect(screen.getByText(HOME.netflixOriginals)).toBeInTheDocument();
  });
});
