import React from "react";

import "./Styles.css";
import { Avatar } from "@material-ui/core";

const SingleStory = ({ image, profileSrc, title }) => {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
        <Avatar className="avatar" src={profileSrc} />
        <h4>{title}</h4>
    </div>
  );
};
export default SingleStory;
