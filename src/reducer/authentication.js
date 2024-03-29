const initialState = {
    isAuthenticated: false,
    user: null
  };

  
  const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          isAuthenticated: true,
          user: action.payload
        };
      case 'LOGOUT':
        return {
          isAuthenticated: false,
          user: null
        };
      default:
        return state;
    }
  };
  