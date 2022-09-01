import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profile">
      <nav>
        <ul>
          <li>Overview</li>
          <li>Repositories</li>
          <li>Projects</li>
          <li>Packages</li>
          <li>Stars</li>
        </ul>
      </nav>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Profile;
