import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { MdRssFeed } from "react-icons/md";
import { Link } from "react-router-dom";
import img1 from "../img/img1.jpeg";

function MainRight() {
  return (
    <div className="mainRight">
      <div className="mainRightContainer">
        <div className="mainRightText">
          <h2>Following</h2>
          <h2>For you</h2>
        </div>

        {/* LineTwo */}
        <div className="lineTwo" />

        <div className="box">
          <h2>
            Welcome ... This is GitHub clone with React.js, Sass and React
            Router
          </h2>
          <p>
            Click on <span>Logo on the left</span>,{" "}
            <span>Logo on the rigth to show the menu</span> and{" "}
            <span>on GitHub Clone button</span>
          </p>

          <button className="btn">
            <Link to="/profile">GitHub Clone</Link>
          </button>
        </div>

        <div className="boxCenter">
          <div className="boxCenterFirst">
            <IoBulbOutline />
            <p>
              On my channel there are videos with <span>React</span>,
              <span>Next.js</span>, <span>Tailwind Css</span> Html and Css ...
            </p>
          </div>
          <div className="boxCenterFirst">
            <MdRssFeed />
            <p>Subscribe to the channel, to stay updated</p>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footerFirst">
            <img src={img1} alt="" />
            <h4>GitHub Clone</h4>
          </div>
          <div className="footerSecond">
            <div className="footerSecondInside">
              <h4>Blog</h4>
              <h4>About</h4>
              <h4>Shop</h4>
              <h4>GitHub Clone</h4>
              <h4>Pricing</h4>
            </div>
            <div className="footerSecondInside">
              <h4>API</h4>
              <h4>Training</h4>
              <h4>Status</h4>
              <h4>Security</h4>
            </div>
            <div className="footerSecondInside">
              <h4>Terms</h4>
              <h4>Privacy</h4>
              <h4>Docs</h4>
            </div>
          </div>
        </div>

        <div className="lineTwo" />
      </div>
    </div>
  );
}

export default MainRight;
