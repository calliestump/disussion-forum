import React from "react";
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import $ from 'jquery';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export default class PostControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  }


  
  // Add HandleCLick to get a functioning 'add post' button.
  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }
  
  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { name, postText, timestamp, votes, id } = newPost;
    const action = {
      type: 'ADD_POST',
      name: name,
      postText: postText,
      timestamp: timestamp,
      votes: votes,
      id: id
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id]
    this.setState({ selectedPost: selectedPost });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { name, postText, timestamp, votes, id } = postToEdit;
    const action = {
      type: 'ADD_POST',
      name: name,
      postText: postText,
      timestamp: timestamp,
      votes: votes,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST', 
      id: id
    }
    dispatch(action);
    this.setState({ selectedPost: null });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    // if(this.state.postList === []){
    //   $("h2.title").hide()
    // }
    if(this.state.editing){
      currentlyVisibleState = 
      <EditPostForm 
      post={this.state.selectedPost} 
      onEditPost = {this.handleEditingPostInList}
      />
      buttonText = "Return to Post List";
    } else if (this.state.selectedPost != null){
      currentlyVisibleState = 
      <PostDetail 
      post={this.state.selectedPost} 
      onClickingEdit = {this.handleEditClick}
      onClickingDelete = {this.handleDeletingPost}
      />
      buttonText = "Go Back To Timeline"
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = 
      <NewPostForm 
      onNewPostCreation={this.handleAddingNewPostToList}
      />
      buttonText = "Return to Timeline";
    } else {
      currentlyVisibleState = 
      <PostList
      postList={this.props.masterPostList}
      onPostSelection={this.handleChangingSelectedPost}
      />;
      buttonText = "Create Post";
    }
    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }

}

PostControl.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state
  }
}

PostControl = connect(mapStateToProps)(PostControl);