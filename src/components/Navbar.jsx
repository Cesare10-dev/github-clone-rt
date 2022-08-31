import React, { useState } from "react";
import img1 from "../img/img1.jpeg";
import { FiBell, FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import Menu from "./Menu";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="navLeft">
        <img src={img1} alt="" />
        <div>
          <input type="text" placeholder="Search or jump to..." />
        </div>
      </div>

      {/* Center */}
      <div className="navCenter">
        <h2>Pulls</h2>
        <h2>Issues</h2>
        <h2>Marketplace</h2>
        <h2>Explore</h2>
      </div>
      {/* Right */}
      <div className="navRight">
        <FiBell />
        <div className="navRightIcons">
          <FiPlus />
          <IoMdArrowDropdown />
        </div>
        <div className="navRightIcons" onClick={() => setShowMenu(!showMenu)}>
          <img
            src="https://yt3.ggpht.com/i4-Gj-EG0gxvgRjxD5SUxHuTZ8Ogknxw7YfXJ-hCPDPALP5lrTTO7wDEXIeRkik-LIV_DOBI=s88-c-k-c0x00ffffff-no-rj-mo"
            alt=""
          />
          <IoMdArrowDropdown />
        </div>
      </div>
      {showMenu && <Menu />}
    </nav>
  );
}

export default Navbar;
