import React from "react";
import "./_video.scss";
import { FaEye } from "react-icons/fa";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img src="https://i.ytimg.com/vi/W6-O00alJUo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDK8C2CCUycUp38MAL-01lZv6ESQQ" alt="" />
        <span>05:43</span>
      </div>
      <div className="video__title">Kuthanthra thanthram -manjumman boys boys </div>
      <div className="video__details">
        <span>
          <FaEye /> 12m Views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img src="https://yt3.ggpht.com/dzgLCjRr-jI96sRdV8Ovl6F3LafGEh3a777hPBBwkN5VL2pixr98frJJwFL8fZQKBg289O574A=s68-c-k-c0x00ffffff-no-rj" alt=""/>
        <p>Think Music</p>
      </div>
    </div>
  );
};

export default Video;
