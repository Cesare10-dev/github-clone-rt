import React from "react";
import { MdInsertEmoticon } from "react-icons/md";

function Left() {
  return (
    <div className="left">
      <div className="image">
        <img
          src="https://yt3.ggpht.com/i4-Gj-EG0gxvgRjxD5SUxHuTZ8Ogknxw7YfXJ-hCPDPALP5lrTTO7wDEXIeRkik-LIV_DOBI=s88-c-k-c0x00ffffff-no-rj-mo"
          alt=""
        />
        <div className="emoticonBox">
          <MdInsertEmoticon className="emoticon" />
        </div>
      </div>
    </div>
  );
}

export default Left;
