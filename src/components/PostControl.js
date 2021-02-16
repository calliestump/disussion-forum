import React from "react";
import NewPostForm from './NewPostForm';
import PostList from './PostList';
// import $ from 'jquery';
import PostDetail from './PostDetail';


export default class PostControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterPostList: [],
      selectedPost: null
    };
  }

  
  // Add HandleCLick to get a functioning 'add post' button.
  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null
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

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    // if(this.state.postList === 0){
    //   $("h1.title").hide()
    // }
    if (this.state.selectedPost != null){
      currentlyVisibleState = 
      <PostDetail 
      post={this.state.selectedPost} 
      />
      buttonText = "Go Back To Posts"
    }
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = 
      <NewPostForm 
      onNewPostCreation={this.handleAddingNewPostToList}
      />
      buttonText = "Return to Posts";
    } else {
      currentlyVisibleState = 
      <PostList
      postList={this.state.masterPostList}
      onPostSelection={this.handleChangingSelectedPost}
      />;
      buttonText = "Add Posts";
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