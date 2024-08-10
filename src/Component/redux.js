// App.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ReduxHook = () => {
  const user = useSelector(state => state);
  const dispatch = useDispatch();

  const login = () => {
    dispatch({ type: 'LOGIN', payload: { name: 'John Doe', email: 'john@example.com' } });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div>
      <h2>User:</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default ReduxHook;
