import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

export default function EditPostForm(props){
  const { post } = props;
  function handleEditPostFormSubmission(event){
    event.preventDefault();
    props.onEditPost({
      name: event.target.name.value,
      postText: event.target.postText.value,
      id: post.id,
      timestamp: post.timestamp
    });
  }

  return (
    <>
      <ReusableForm 
      formSubmissionHandler={handleEditPostFormSubmission} 
      buttonText="update post"
      />
    </>
  );
}

EditPostForm.propTypes = {
  onEditPost: PropTypes.func
}