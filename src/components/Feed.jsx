import React, { useState, useEffect } from "react";
import "../styles/feed.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Avatar from "@material-ui/core/Avatar";
import { db } from "../db_core/firebase";
import { collection, getDocs } from "@firebase/firestore/lite";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsCollection = collection(db, "posts");
      const postsSnapshot = await getDocs(postsCollection);
      const postsData = postsSnapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));
      console.log(postsData);
      setPosts(postsData);
    };
    getPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed-header">
        <h1>Home</h1>
      </div>
      <TweetBox />
      {posts.map((p) => (
        <Post
          key={p.uid}
          name={p.name}
          username={p.username}
          isVerified={p.isVerified}
          text={p.text}
          avatar={p.avatar}
        />
      ))}
    </div>
  );
}

const TweetBox = () => {
  return (
    <div className="tweet-box">
      <Avatar alt="Sub x" src="" />
      <div className="right">
        <textarea cols="30" rows="3" placeholder="Whats happening"></textarea>
        <button className="primary-btn post-tweet-btn" disabled={true}>
          Tweet
        </button>
      </div>
    </div>
  );
};

const Post = ({ name, username, isVerified, text, image, avatar }) => {
  return (
    <div className="tweet-post">
      <Avatar alt={name} src={avatar} />
      <div className="post-content-holder">
        <div className="poster-info">
          <div>
            <p>{name}</p>
            {isVerified && <VerifiedUserIcon className="verified" />}
            <span>{username} . Aug 24</span>
          </div>
          <button className="drop-down-btn">
            <MoreHorizIcon />
          </button>
        </div>
        <div className="post-content">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
