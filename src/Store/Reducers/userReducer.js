const InitialState = {
  isError: null,
}

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "UPDATE_SUCCESS":
      console.log("update success");
      return {
        ...state,
        isError: null
      }
    case "UPDATE_ERROR":
      console.log(action.error)
      return {
        ...state,
        isError: action.error.message
      }
    default:
      return state
  }
}

export default userReducer;