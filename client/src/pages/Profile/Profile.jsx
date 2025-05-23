import { useAuth } from "../../context/AuthContext";
import "./Profile.css";

const Profile = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className="profile-page">
      <h2>Welcome, {currentUser?.name}</h2>
      <div className="profile-info">
        <p>Email: {currentUser?.email}</p>
        <button onClick={logout}>Logout</button>
      </div>
      <div className="saved-scholarships">
        <h3>Your Saved Scholarships</h3>
        {/* Display saved scholarships here */}
      </div>
    </div>
  );
};

export default Profile;