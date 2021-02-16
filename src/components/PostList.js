import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
// import $ from "jquery";

export default function PostList(props) {
  return (
    <>
      {/* {props.postList.length === 0 ? <h2 class="title"><strong>No posts have been added to timeline.</strong></h2> : <h2 class="title"><strong>POSTS</strong></h2> */}
      <h2 className="title"><strong>POSTS</strong></h2><br />
      {props.postList.map((post) => 
        <Post 
        whenPostClicked = { props.onPostSelection }
        name={post.name}
        timestamp={post.timestamp}
        votes={post.votes}
        postText={post.postText}
        id={post.id}
        key={post.id} 
        />
        )}
    </>
  )
  // if(props.postList.length < 1) {
  //   $("h2.title").hide();
  // }
}

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func
}