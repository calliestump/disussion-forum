import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, postText, timestamp, votes, id } = action;
  switch (action.type) {
  case c.ADD_POST:
    return Object.assign({}, state, {
      [id]: {
        name,
        postText,
        timestamp,
        votes,
        id
      }
    });
  case c.UPVOTE_POST:
    // const add1 = votes + 1;
    return Object.assign({}, state, {
      [id]: {
        name: name,
        postText: postText,
        timestamp: timestamp,
        votes: votes + 1,
        id: id
      }
    })
  case c.DELETE_POST:
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};


