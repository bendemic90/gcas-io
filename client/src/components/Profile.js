import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="profile">Loading ...</div>;
  }

  return (
    isAuthenticated ? (
      <div className="profile">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    ) : (
      <div className="profile">
        <h2>Please log in above.</h2>
      </div>
    )
  );
};

export default Profile;