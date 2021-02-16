import React from 'react';
import {v4, v1} from 'uuid';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

export default function NewPostForm(props){
  function handleNewPostFormSubmission(event){
    event.preventDefault();
    props.onNewPostCreation({
      name: event.target.name.value,
      postText: event.target.postText.value,
      id: v4(),
      timestamp: v1()
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
}