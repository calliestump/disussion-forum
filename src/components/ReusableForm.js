import React from "react";
import PropTypes from "prop-types";

export default function ResuableForm(props){
  return (
    <>
      <h2><u>Make a Post</u></h2> 
      <br />
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
        <br /><br />
      </form>
    </>
  );
}

ResuableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};