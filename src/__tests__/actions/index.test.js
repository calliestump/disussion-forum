import * as actions from './../../actions';

describe('discussion forum actions', () =>{
  it('deletePost should create DELETE_POST action', () => {
    expect(actions.deletePost(1)).toEqual({
      type: 'DELETE_POST',
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type:'TOGGLE_FORM'
    });
  });

  it('addPost should create ADD_POST action', () => {
    expect(actions.addPost({name: 'Britney & Britney', postText: 'foobar!',
    timestamp: '2/17/2021, 9:08:12 AM',
    votes: 1,
    id: 1})).toEqual({
    type: 'ADD_POST',
    name: 'Britney & Britney',
    postText: 'foobar!',
    timestamp: '2/17/2021, 9:08:12 AM',
    votes: 1,
    id: 1
    });
  });
});