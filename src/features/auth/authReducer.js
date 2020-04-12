import { createReducer } from "../../app/common/util/reducerUtils";
import { LOGIN_USER, SIGN_OUT_USER } from "./authConstants";

const initialState = {
  authentiated: false,
  currentUser: null,
};

const loginUser = (state, payload) => {
  return {
    authentiated: true,
    currentUser: payload.creds.email,
  };
};

const signOutUser = () => {
  return {
    authentiated: false,
    currentUser: null,
  };
};

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [SIGN_OUT_USER]: signOutUser
})