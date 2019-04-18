const InitialState = {
  archiveList: []
}

const archiveReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "GET_ARCHIVE_LIST":
      return {
        ...state,
        archiveList: action.archiveList
      }
    default:
      return state
  }
}

export default archiveReducer;