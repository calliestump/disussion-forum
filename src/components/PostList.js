import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

const masterPostList = [
  {
  name: "test",
  timestamp: "time",
  votes: 10,
  postText: "hello"
  },
  {
  name: "test2",
  timestamp:"time2",
  votes: 11,
  postText: "hello2"
  }
];
export default function PostList(props) {
  return (
    <>
      {masterPostList.map((post, index) => 
        <Post 
        name={post.name}
        timestamp={post.timestamp}
        votes={post.votes}
        postText={post.postText}
        key={index} 
        />
      )}
    </>
  )
}

PostList.propTypes = {
  postList: PropTypes.array
}