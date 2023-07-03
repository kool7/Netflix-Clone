import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../adapters/SuperbaseClient';
import './SignIn.css';

function SignIn() {

  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const navigate = useNavigate();

  const register = async (e: React.MouseEvent<HTMLSpanElement>): Promise<any> => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    })
    
  };
  
  const signIn = async (e: React.MouseEvent<HTMLSpanElement>): Promise<any> => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    })
    
    navigate('/');
  };

  return (
    <div className="signup">
      <form>
        <h1>Sign In</h1>
        <input type="email" name="" id="email" placeholder="Email or phone number" ref={emailRef}/>
        <input type="password" name="" id="password" placeholder='Password' ref={passwordRef}/>
        <button type="submit" onClick={signIn} >Sign In</button>

        <h4>
          <span className="signup_grey">New to Netflix? </span>
          <span className="signup_link" onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignIn
