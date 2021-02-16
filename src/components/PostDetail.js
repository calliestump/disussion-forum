import React from 'react';
import PropTypes from 'prop-types';

export default function PostDetail(props){
  const { post } = props;

  return (
    <>
      <h1>Post Details</h1>
      <h3>{post.name}</h3>
    </>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object
}