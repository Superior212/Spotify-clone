import { combineReducers } from 'redux';

const initialState = {
  isLoggedIn: false,
  user: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        isLoggedIn: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
