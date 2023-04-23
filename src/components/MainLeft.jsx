import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import lists from "../lists.json";
import img1 from "../img/img1.jpeg";

function MainLeft() {
  return (
    <div className="mainLeftContainer">
      <div className="mainLeft">
        <div className="mainLeftName">
          <img src={img1} alt="" />
          <h2>Cesare</h2>
          <IoMdArrowDropdown />
        </div>

        {/* Line */}
        <div className="line" />

        {/* Recent Repo */}
        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Recent Repositories</h2>
            <button>New</button>
          </div>
          <div className="inputBox">
            <input type="text" placeholder="Find a repositories..." />
          </div>
        </div>

        <div className="mainLeftLists">
          {lists.map((item, idx) => (
            <div className="item" key={idx}>
              <img src={img1} alt="" />
              <div>
                <h2>{`${item.name}/${item.repo}`}</h2>
              </div>
            </div>
          ))}
          <Link to="/profile">Show more</Link>
        </div>

        {/* Line */}
        <div className="line" />

        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Recent Activities</h2>
          </div>
          <p>Thanks for watching</p>
        </div>

        {/* Line */}
        <div className="line" />

        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Your teams</h2>
          </div>
          <div className="inputBoxTwo">
            <input type="text" placeholder="Find a team..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLeft;
