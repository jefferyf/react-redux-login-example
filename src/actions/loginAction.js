export const loginAction = (username, password) => dispatch => {
  dispatch({ type: 'SET_LOGIN_PENDING', isLoginPending: true  });

  dispatch({ type: 'SET_LOGIN_SUCCESS', isLoginSuccess: false });

  callLoginApi(username, password, error => {
    dispatch({ type: 'SET_LOGIN_PENDING', isLoginPending: false  });
    if (!error) {
      dispatch({ type: 'SET_LOGIN_SUCCESS', isLoginSuccess: true });
    } else {
      dispatch({ type: 'SET_LOGIN_ERROR', loginError: error });
    }
  })
}

function callLoginApi (username, password, callback) {
  setTimeout(() => {
    if (username === 'admin' && password === 'please') {
      return callback(null);
    } else {
      return callback(new Error('Invalid username or password'));
    }
  }, 1000);
}