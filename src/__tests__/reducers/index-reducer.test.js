import rootReducer from '../../reducers/index';
import {createStore} from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import postListReducer from '../../reducers/post-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recongized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterPostList: {},
      formVisibleOnPage: false
    });
  });
  
  test('Check that initial state of postListReducer matches root reducer', () => {
    expect(store.getState().masterPostList).toEqual(postListReducer(undefined, { type: null}));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('check that ADD_POST action works for postListReducer and root reducer', ()=> {
    const action = {
      type: 'ADD_POST',
      name: 'Britney & Britney',
      postText: 'foobar!',
      timestamp: '2/17/2021, 9:08:12 AM',
      votes: 1,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterPostList).toEqual(postListReducer(undefined, action));
  });
});