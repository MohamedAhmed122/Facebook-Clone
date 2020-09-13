import React, { useState } from "react";

import person from "../../assets/ran1.jpeg";

import "./Styles.css";

import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const MessageCenter = () => {
  const [inputField, setInputField] = useState("");
  const [imageField, setImageField] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputField('')
    setImageField('')
  };

  return (
    <div className="MessageCenter">
      <div className="Message-top">
        <Avatar src={person} />
        <form>
          <input
            value={inputField}
            onChange={(e) => setInputField(e.target.value)}
            className="main-input"
            type="text"
            placeholder="what's in your mind?"
          />
          <input
            imageField={imageField}
            onChange={(e) => setImageField(e.target.value)}
            type="text"
            placeholder="Image Url (Optional)"
          />
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Hidden Button
          </button>
        </form>
      </div>
      <div className="Message-bottom">
        <div className="option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Live Video</h3>
        </div>
        <div className="option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};
export default MessageCenter;
