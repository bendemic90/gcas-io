import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MainMenu from "./MainMenu";
import { Link } from "react-router-dom"

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="profile">Loading ...</div>;
  }

  return (
    isAuthenticated ? (
      <div className="profile">
        <h2>Welcome back: {user.name}</h2>
        {console.log(user)}
        <p>{user.email}</p>
        <Link to="/mainmenu"><button>Main Menu</button></Link>
      </div>
    ) : (
      <div className="profile">
        <h2>Please log in above.</h2>
      </div>
    )
  );
};

export default Profile;