import React, { useState, useEffect } from "react";
import MainStory from "../Story/Main/Story";
import Post from "../Post /Post";
// import db from "../../firebase";

import "./Styles.css";
import MessageCenter from "../MessageCenter/MessageCenter";
import { dataFromSnapshot, getEventFromFirestore } from "../../Firebase/FirebaseConfig";

const Feeds = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = getEventFromFirestore({
      // this what happen next
      next: (snapshot) =>
      setPosts( snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))),
      error: (error) => console.log(error),
    });
    return unsubscribe;
  },[]);
  return (
    <div className="feeds">
      <MainStory />
      <MessageCenter />
      {posts.map((post) => (
        <Post
          key={post.id}
          image={post.image}
          message={post.message}
          timeStamp={post.timeStamp}
        />
      ))}
    </div>
  );
};
export default Feeds;
