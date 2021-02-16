import React from "react";
import PropTypes from "prop-types";

export default function ResuableForm(props){
  return (
    <>
      <h1><u>Make a Post</u></h1> 
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type="text"
          name="name"
          placeholder="user-name"
        /><br /><br />
        <textarea
          type="text"
          name="postText"
          placeholder="What are you thinking?..."
        />
        <br /><br />
        <button type="submit">{props.buttonText}</button>
        <br />
      </form>
    </>
  );
}

ResuableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}