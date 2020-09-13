import React, { useState, useEffect } from "react";
import MainStory from "../Story/Main/Story";
import Post from "../Post/Post";
import {db} from "../../firebase";

import "./Styles.css";
import MessageCenter from "../MessageCenter/MessageCenter";


export default function Feeds  ()  {
  const [arrays, setArrays] = useState([]);


  useEffect(() => {
    db.collection("posts").orderBy('timeStamp', 'desc').onSnapshot((snapshot) =>
      setArrays(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  },[]);
  return (
    <div className="feeds">
      <MainStory />
      <MessageCenter />
      {arrays.map((post) => (
        <Post
          key={post.id}
          image={post.data.image}
          message={post.data.message}
          timeStamp={post.data.keytimeStamp}
        />
      ))}
    </div>
  );
};

