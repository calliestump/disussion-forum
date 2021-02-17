import postListReducer from '../../reducers/post-list-reducer';

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
      type: 'ADD_POST',
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
      type: 'DELETE_POST',
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

});

// 2/17/2021, 9:08:12 AM