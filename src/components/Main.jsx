import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import lists from "../lists.json";

function Main() {
  return (
    <main className="main">
      {/* Left */}
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
            <input type="text" placeholder="Find a repositories..." />
          </div>

          <div className="mainLeftLists">
            {lists.map((item) => (
              <div className="item">
                <img
                  src="https://yt3.ggpht.com/i4-Gj-EG0gxvgRjxD5SUxHuTZ8Ogknxw7YfXJ-hCPDPALP5lrTTO7wDEXIeRkik-LIV_DOBI=s88-c-k-c0x00ffffff-no-rj-mo"
                  alt=""
                />
                <div>
                  <h2>{`${item.name}/${item.repo}`}</h2>
                </div>
              </div>
            ))}
            <a href="#">Show more</a>
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
            <input type="text" placeholder="Find a team..." />
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="mainRight">
        <div className="marginRightContainer">
          <div className="menu">
            <h2>Following</h2>
            <h2>For you</h2>
          </div>

          {/* Line */}
          <div className="line" />

          <div className="box">
            <h2>
              Discover interesting projects and people to populate your personal
              news feed.
            </h2>
            <p>
              Your news feed helps you keep up with recent activity on
              repositories you <span>watch</span> or <span>star</span> and
              people you <span>star</span>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
