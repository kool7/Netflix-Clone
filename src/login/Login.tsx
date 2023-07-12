import { useState } from "react";
import SignIn from "../signIn/SignIn";
import "./Login.css";

function Login() {
  const [signIn, setSignIn] = useState<boolean>(false);

  return (
    <div className="login">
      <div className="login_background">
        <img
          className="login_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix_Logo"
        />

        <button className="login_button" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="login_gradient"></div>
      </div>

      <div className="login_body">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="login_input">
              <form action="">
                <input type="email" name="" id="" placeholder="Email address" />
                <button
                  className="login_getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
