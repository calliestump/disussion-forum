import React from 'react';
import PropTypes from 'prop-types';
import {Jumbotron} from 'react-bootstrap';

export default function Post(props){
  return (
    <>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <Jumbotron>
          
          <h3>User: {props.name}</h3>
          <h3>Votes: {props.votes}</h3>
          <h3>Date Posted: {props.timestamp}</h3>
        </Jumbotron>
        <hr />
      </div>
    </>
  );
}

Post.propTypes = {
  name: PropTypes.string,
  timestamp: PropTypes.string, // object
  votes: PropTypes.number,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
}