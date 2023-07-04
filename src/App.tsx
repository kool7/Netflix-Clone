import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { supabase } from "./adapters/SuperbaseClient";
import { login, logout, selectUser } from "./features/userSlice";
import Home from './home/Home';
import Login from './login/Login';
import Profile from "./profile/Profile";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        dispatch(
          login({
            isSignedIn : true
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
        {
          !user ?
          <Login/> : 
          <Routes>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/' element={<Home />}/>
          </Routes>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
