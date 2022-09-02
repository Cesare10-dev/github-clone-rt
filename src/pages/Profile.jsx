import React from "react";
import { Link } from "react-router-dom";
import Left from "../components/Left";
import { AiOutlineInbox } from "react-icons/ai";
import { TbBook, TbBook2 } from "react-icons/tb";
import { FiBox, FiStar } from "react-icons/fi";
import Overview from "../components/Overview";

function Profile() {
  return (
    <>
      <Left />

      <div className="profile">
        <nav>
          <div className="profileIcon">
            <TbBook />
            <h2>Overview</h2>
          </div>
          <div className="profileIcon">
            <TbBook2 />
            <h2>Repositories</h2>
          </div>
          <div className="profileIcon">
            <AiOutlineInbox />
            <h2>Projects</h2>
          </div>
          <div className="profileIcon">
            <FiBox />
            <h2>Packages</h2>
          </div>
          <div className="profileIcon">
            <FiStar />
            <h2>Stars</h2>
          </div>
        </nav>

        <div className="lineFour" />

        <div className="sectionCenter">
          <Overview />
        </div>
        {/* <Link to="/">Home</Link> */}
      </div>
    </>
  );
}

export default Profile;
