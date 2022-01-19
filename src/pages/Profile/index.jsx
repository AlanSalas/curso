import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const country = params.get("country");

  return (
    <div>
      <h1>
        Profile {username} from {country}
      </h1>
    </div>
  );
};

export default Profile;
