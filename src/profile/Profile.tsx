import { useSelector } from "react-redux";
import { supabase } from "../adapters/SuperbaseClient";
import { selectUser } from "../features/userSlice";
import Navigation from "../navigation/Navigation";
import "./Profile.css";

function Profile() {

  const user = useSelector(selectUser);

  const logout = async (e: React.MouseEvent<HTMLSpanElement>): Promise<any> => {
    await supabase.auth.signOut()
  };

  return (
    <div className="profile">
      <Navigation />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        
        <div className="profile_info">
          <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="profile" />

          <div className="profile_details">
            <h2>{user.email}</h2>

            <div className="profile_plans">
              <h3>Plans</h3>
              <button className="profile_logout" onClick={logout}>Sign Out</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile
