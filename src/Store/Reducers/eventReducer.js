const InitialState = {
  eventList: [],
}

const eventReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "GET_EVENT_LIST":
      return {
        ...state,
        eventList: action.eventList
      }
    default:
      return state
  }
}

export default eventReducer;