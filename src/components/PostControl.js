import React from "react";
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';


export default class PostControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }
  
  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
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
    const action = a.addPost(postToEdit); 
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = a.deletePost(id);
    dispatch(action);
    this.setState({ selectedPost: null });
  }

  handleUpVote = () => {
    // const selectedPost = this.props.masterPostList[id];
    const selectedPost = this.state.selectedPost.id
    this.setState({
      votes: (this.selectedPost.props.votes + 1)
    })
    console.log(selectedPost.props.votes)
  }

  

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
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
      onClickingUpVote={this.handleUpVote}
      post={this.state.selectedPost} 
      onClickingEdit = {this.handleEditClick}
      onClickingDelete = {this.handleDeletingPost}
      />
      buttonText = "Go Back To Timeline"
    } else if (this.props.formVisibleOnPage){
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
  masterPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);