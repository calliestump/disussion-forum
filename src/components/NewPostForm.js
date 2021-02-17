import React from 'react';
import {v4, v1} from 'uuid';
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
      id: v4(),
      timestamp: currentTime
      // var date_obj = get_date_obj(  '8bf1aeb8-6b5b-11e4-95c0-001dba68c1f2' );
      // date_obj.toLocaleString( );// '11/13/2014, 9:06:06 PM'
      // const timeElapsed = Date.now();
      // const today = new Date(timeElapsed);
      // today.toDateString(); // "Sun Jun 14 2020"
      // today.toISOString(); // "2020-06-13T18:30:00.000Z"
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