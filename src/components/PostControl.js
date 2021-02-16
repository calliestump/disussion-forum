import React from "react";
import NewPostForm from './NewPostForm';
import PostList from './PostList';


export default class PostControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterPostList: [],
    };
  }

  handleAddingNewPostToList = (newPost) => {
    const newMasterPostList = this.state.masterPostList.concat(newPost);
    this.setState({masterPostList: newMasterPostList, formVisibleOnPage: false})
  }

  // Add HandleCLick to get a functioning 'add post' button.
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = 
      <NewPostForm 
      onNewPostCreation={this.handleAddingNewPostToList}
      />
      buttonText = "Return to Posts";
    } else {
      currentlyVisibleState = 
      <PostList
      postList={this.state.masterPostList}
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