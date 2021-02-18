import React from 'react';
import {v4} from 'uuid';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

export default function NewPostForm(props){
  
  const timeElapsed = Date.now();
  const currentTime = new Date(timeElapsed).toLocaleString();
  function handleNewPostFormSubmission(event){
    event.preventDefault();
    props.onNewPostCreation({
      name: event.target.name.value,
      postText: event.target.postText.value,
      votes: 0,
      id: v4(),
      timestamp: currentTime
    })
  }
  return (
    <>
      <ReusableForm
      formSubmissionHandler={handleNewPostFormSubmission}
      buttonText="Post"
      />
    </>
  )
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};