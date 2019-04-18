const InitialState = {
  authError: null
}

const authReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      // console.log("login failed")
      return {
        ...state,
        authError: "Invalid email or password!"
      }
    case "LOGIN_SUCCESS":
      // console.log("login success")
      return {
        ...state,
        authError: null
      }
    case "LOGOUT":
      // console.log("Logged Out success")
      return state
    case "SIGN_UP_SUCCESS":
      // console.log("Sign up success")
      return {
        ...state,
        authError: null
      }
    case "SIGN_UP_ERROR ":
      // console.log(action.err.message)
      return {
        ...state,
        authError: action.error.message
      }
    default:
      return state
  }
}

export default authReducer;