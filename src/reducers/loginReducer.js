export default (state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
}, action) => {
  switch (action.type) {
    case 'SET_LOGIN_PENDING': 
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });
    
    case 'SET_LOGIN_SUCCESS':
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });
    
    case 'SET_LOGIN_ERROR':
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    default:
      return state
  }
}