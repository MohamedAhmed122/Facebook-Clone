import React, { useState, useEffect } from "react";
import MainStory from "../Story/Main/Story";
import Post from "../Post/Post";
import {db} from "../../firebase";
import FlipMove from 'react-flip-move'
import "./Styles.css";
import MessageCenter from "../MessageCenter/MessageCenter";


export default function Feeds  ()  {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    db.collection("posts").orderBy('timeStamp', 'desc').onSnapshot((snapshot) =>
    setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  },[]);
  return (
    <div className="feeds">
      <MainStory />
      <MessageCenter />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            image={post.data.image}
            message={post.data.message}
            timeStamp={post.data.keytimeStamp}
          />
        ))}
      </FlipMove>
      
    </div>
  );
};

