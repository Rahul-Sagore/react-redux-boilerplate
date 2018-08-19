const initialState = {
  currentCount: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        currentCount: state.currentCount + 1
      }
    case 'DECREMENT_COUNT':
      return {
        ...state,
        currentCount: state.currentCount - 1
      }
    case 'RESET_COUNT':
      return initialState
    default:
      return state
  }
}
