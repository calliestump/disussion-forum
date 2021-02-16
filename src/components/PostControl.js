import React from "react";
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import $ from 'jquery';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';


export default class PostControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterPostList: [],
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
    const newMasterPostList = this.state.masterPostList.concat(newPost);
    console.log(newPost);
    console.log(this.state.newMasterPostList);
    this.setState({masterPostList: newMasterPostList, formVisibleOnPage: false});
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.masterPostList.filter(post => post.id === id)[0]
    this.setState({selectedPost: selectedPost});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingPostInList = (postToEdit) => {
    const editedMasterPostList = this.state.masterPostList
      .filter(post => post.id !== this.state.selectedPost.id)
      .concat(postToEdit);
    this.setState({
      masterPostList: editedMasterPostList,
      editing: false,
      selectedPost: null
    });
  }

  handleDeletingPost = (id) => {
    const newMasterPostList = this.state.masterPostList.filter(post => post.id !== id)
    this.setState({
      masterPostList: newMasterPostList,
      selectedPost: null
    });
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
      postList={this.state.masterPostList}
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

// if (this.state.formVisibleOnPage) {
//   currentlyVisibleState = 
//   <NewKegForm
//   onNewKegCreation={this.handleAddingNewKegToList} 
//   />
//   buttonText = "Return to Keg List";
// } else {
//   currentlyVisibleState = 
//   <KegList 
//   kegList={this.state.masterKegList}
//   onKegSelection={this.handleChangingSelectedKeg}
//   />;
//   buttonText = "Add Keg";
// }

// LHTP
// render(){
//   let currentlyVisibleState = null;
//   if (this.state.formVisibleOnPage) {
//     currentlyVisibleState = <NewTicketForm />
//   } else {
//     currentlyVisibleState = <TicketList />
//   }
//   return (
//     <React.Fragment>
//       {currentlyVisibleState}
//     </React.Fragment>
//   );
// }

// }