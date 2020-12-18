const authReducer = (state = { authError: null }, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("failed");
      return { ...state, authError: "Login Failed" };
    case "LOGIN_SUCCESS":
      console.log("success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout sucess");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup sucess");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("signup error", action.err);
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
