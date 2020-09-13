import React,{forwardRef} from "react";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./PostStyles.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function Post  ({ timeStamp, image, message })  {

  const { currentUser } = useSelector((state) => state.auth);
  return (
    <section  className="section-post">
        <div className="post-top">
            <Avatar className="post-ava" src={currentUser.photoURL} />
            <div className="post-info">
            <h3>{currentUser.displayName}</h3>
            <p>{new Date(timeStamp?.toDate()).toISOString}</p>
            </div>
        </div>
        <div className="post-bottom">
            <p>{message}</p>
        </div>
        <div className="post-image">
            <img src={image} alt="" />
        </div>
        <div className="post-options">
            <div className="post-option">
                <ThumbUpIcon />
                <p>Likes</p>
            </div>
            <div className="post-option">
                <ChatBubbleIcon />
                <p>Comment</p>
            </div>
            <div className="post-option">
                <NearMeIcon />
                <p>Share</p>
            </div>
            <div className="post-option">
                <AccountCircleIcon />
                <ExpandMoreIcon />
            </div>
        </div>
    </section>
  );
}

