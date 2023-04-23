import React from "react";
import { MdInsertEmoticon } from "react-icons/md";
import img1 from "../img/img1.jpeg";

function Left() {
  return (
    <div className="left">
      <div className="image">
        <img src={img1} alt="" />
        <div className="emoticonBox">
          <MdInsertEmoticon className="emoticon" />
        </div>
      </div>

      <div className="leftDetails">
        <h2>Cesare</h2>
        <button>Edit profile</button>
      </div>
    </div>
  );
}

export default Left;
