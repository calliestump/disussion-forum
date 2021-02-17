import postListReducer from '../../reducers/post-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('postListReducer', () => {
  let action;

  const currentState = {
    1: {name: 'Ryan & Aimen',
    postText: 'foobar!',
    timestamp: '2/17/2021, 9:08:12 AM',
    votes: 1,
    id: 1},
    2: {name: 'Bob & Sally',
    postText: 'barfoo!',
    timestamp: '2/17/2021, 8:09:12 AM',
    votes: 3,
    id: 2},
  };

  const postData = {
    name: 'Ryan & Aimen',
    postText: 'foobar!',
    timestamp: '2/17/2021, 9:08:12 AM',
    votes: 1,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to masterPostList', () => {
    const { name, postText, timestamp, votes, id } = postData;
    action = {
      type: c.ADD_POST,
      name: name,
      postText: postText,
      timestamp: timestamp,
      votes: votes,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        postText: postText,
        timestamp: timestamp,
        votes: votes,
        id: id
      }
    });
  });
  
  test('Should successfully delete a post', () => {
    action = {
      type: c.DELETE_POST,
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {name: 'Bob & Sally',
      postText: 'barfoo!',
      timestamp: '2/17/2021, 8:09:12 AM',
      votes: 3,
      id: 2}
    });
  });

  test('Should successfully add a vote to total post votes', () => {
    const { name, postText, timestamp, votes, id } = postData;
    // const add1 = votes + 1;
    action = {
      type: c.UPVOTE_POST,
      name: name,
      postText: postText,
      timestamp: timestamp,
      votes: votes,
      id: id
    };
    expect(postListReducer(postData, action)).toMatchObject({
      1: {
        name: 'Ryan & Aimen',
        postText: 'foobar!',
        timestamp: '2/17/2021, 9:08:12 AM',
        votes: 2,
        id: 1
      }
    });
  });

});

// 2/17/2021, 9:08:12 AM