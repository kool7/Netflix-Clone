import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { supabase } from "./adapters/SuperbaseClient";
import { login, logout, selectUser } from "./features/userSlice";
import Home from "./home/Home";
import Login from "./login/Login";
import Profile from "./profile/Profile";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" || event === "INITIAL_SESSION") {
        dispatch(
          login({
            isSignedIn: true,
            email: session?.user.email,
            uid: session?.user.id
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={user ? <Home /> : <Login />} />
            <Route path="/profile" element={user ? <Profile /> : <Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
