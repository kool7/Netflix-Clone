import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import userReducer, { login, logout } from "../../../features/userSlice";
import { createRandomUser } from "../../__fixtures__/user";
import { INITIAL_STATE } from "../../utility/helper";

describe("userSlice", () => {
  let store: EnhancedStore;

  beforeEach(() => {
    store = configureStore({
      reducer: { user: userReducer },
      preloadedState: INITIAL_STATE,
    });
  });

  test("should handle login and set user data object", () => {
    const user = createRandomUser();
    store.dispatch(login(user));

    const state = store.getState();
    expect(state.user.user).toEqual(user);
  });

  test("should handle logout and reset to initial state", () => {
    store.dispatch(logout());

    const state = store.getState();
    expect(state.user.user).toBeNull();
  });
});
