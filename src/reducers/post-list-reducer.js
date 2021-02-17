export default (state = {}, action) => {
  const { name, postText, timestamp, votes, id } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        name,
        postText,
        timestamp,
        votes,
        id
      }
    });
  case 'DELETE_POST':
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};
