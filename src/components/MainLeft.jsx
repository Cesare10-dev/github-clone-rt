import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import lists from "../lists.json";

function MainLeft() {
  return (
    <div className="mainLeftContainer">
      <div className="mainLeft">
        <div className="mainLeftName">
          <img
            src="https://yt3.ggpht.com/i4-Gj-EG0gxvgRjxD5SUxHuTZ8Ogknxw7YfXJ-hCPDPALP5lrTTO7wDEXIeRkik-LIV_DOBI=s88-c-k-c0x00ffffff-no-rj-mo"
            alt=""
          />
          <h2>Universe Code</h2>
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
              <img
                src="https://yt3.ggpht.com/i4-Gj-EG0gxvgRjxD5SUxHuTZ8Ogknxw7YfXJ-hCPDPALP5lrTTO7wDEXIeRkik-LIV_DOBI=s88-c-k-c0x00ffffff-no-rj-mo"
                alt=""
              />
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
          <p>
            When you take actions across GitHub, we’ll provide links to that
            activity here.
          </p>
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
