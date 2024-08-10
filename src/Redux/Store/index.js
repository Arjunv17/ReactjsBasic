// store.js

import { createStore } from 'redux';

// Reducer for user
const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT':
      return ;
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(userReducer);

export default store;
