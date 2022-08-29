import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { MdRssFeed } from "react-icons/md";

function MainRight() {
  return (
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
            repositories you <span>watch</span> or <span>star</span> and people
            you <span>star</span>.
          </p>
        </div>

        <div className="boxCenter">
          <div className="boxCenterFirst">
            <IoBulbOutline />
            <p>
              ProTip! The feed shows you events from people you
              <span>follow</span> and repositories you <span>watch</span> or
              <span>star</span>.
            </p>
          </div>
          <div className="boxCenterFirst">
            <MdRssFeed />
            <p>Subscribe to your news feed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRight;
