import React from "react";
import img1 from "../img/img1.png";

function Navbar() {
  return (
    <div>
      {/* Left */}
      <div>
        <img src={img1} alt="" />
        <div>
          <input type="text" placeholder="Search or jump to..." />
        </div>
      </div>

      {/* Center */}
      <div>
        <h2>Pulls</h2>
        <h2>Issues</h2>
        <h2>Marketplace</h2>
        <h2>Explore</h2>
      </div>
      {/* Right */}
    </div>
  );
}

export default Navbar;
