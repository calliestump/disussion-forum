import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props){
  return (
    <>
      <h1>POST</h1>
      <h3>name: {props.name}</h3>
      <h3>timestamp: {props.timestamp}</h3>
      <h3>votes: {props.votes}</h3>
      <h3>PostText: {props.postText}</h3>
      <hr/>
    </>
  );
}

Post.propTypes = {
  name: PropTypes.string,
  timestamp: PropTypes.string, // object
  votes: PropTypes.number,
  id: PropTypes.string
}