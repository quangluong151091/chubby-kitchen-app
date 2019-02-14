var redux = require('redux');

const InitialState = {
  eventList: [],
  archiveList: []
}

const allReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "GET_EVENT_LIST":
      return {
        ...state,
        eventList: action.eventList
      }
    case "GET_ARCHIVE_LIST":
      return {
        ...state,
        archiveList: action.archiveList
      }
    default:
      return state
  }
}

var store = redux.createStore(allReducer);

export default store;