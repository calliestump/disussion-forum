export const deletePost = id => ({
  type: 'DELETE_POST',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addPost = (post) => {
  const {name, postText, timestamp, votes, id} = post;
  return {
    type: 'ADD_POST',
    name: name,
    postText: postText,
    timestamp: timestamp,
    votes: votes,
    id: id
  }
}
export const upVotePost = (post) => {
  const {votes, id} = post;
  return {
    type: 'UPVOTE_POST',
    votes: votes + 1,
    id: id
  }
}

