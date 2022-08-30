import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { MdRssFeed } from "react-icons/md";
import img1 from "../img/img1.jpeg";

function MainRight() {
  return (
    <div className="mainRight">
      <div className="marginRightContainer">
        <div className="menu">
          <h2>Following</h2>
          <h2>For you</h2>
        </div>

        {/* LineTwo */}
        <div className="lineTwo" />

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

        {/* Footer */}
        <div className="footer">
          <div className="footerFirst">
            <img src={img1} alt="" />
            <h4>2022, GitHub Inc.</h4>
          </div>
          <div className="footerSecond">
            <div>
              <h4>Blog</h4>
              <h4>About</h4>
              <h4>Shop</h4>
              <h4>Contact GitHub</h4>
              <h4>Pricing</h4>
            </div>
            <div>
              <h4>API</h4>
              <h4>Training</h4>
              <h4>Status</h4>
              <h4>Security</h4>
            </div>
            <div>
              <h4>Terms</h4>
              <h4>Privacy</h4>
              <h4>Docs</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRight;
