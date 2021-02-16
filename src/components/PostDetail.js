import React from 'react';
import PropTypes from 'prop-types';

export default function PostDetail(props){
  const { post } = props;

  return (
    <>
      <h1>Post Details</h1>
      <h3>User: {post.name}</h3>
      <h3>Votes: {post.votes}</h3>
      <h3>Text: {post.postText}</h3>
      <h3>Timestamp: {post.timestamp}</h3>
      <button className="edit" onClick = {props.onClickingEdit}>Edit Post</button>
    </>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingEdit: PropTypes.func
};