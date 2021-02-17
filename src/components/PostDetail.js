import React from 'react';
import PropTypes from 'prop-types';

export default function PostDetail(props){
  const { post, onClickingDelete } = props;

  return (
    <>
      <h2><strong>Post Details</strong></h2><br />
      <div className="jumbotron">
        <h3 className="userName"><strong><u>{post.name}</u></strong></h3>
        <h3>{post.postText}</h3>
      </div>
      <h3>Votes: {post.votes}</h3>
      <h3 className="timestamp">Timestamp: {post.timestamp}</h3><br />
      <button className="edit" onClick = {props.onClickingEdit}>Edit Post</button>
      <button className="delete" onClick = {() => onClickingDelete(post.id)}>Delete Post</button>
      <br /><br />
    </>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};