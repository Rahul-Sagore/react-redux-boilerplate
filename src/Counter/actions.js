export const increment = () => {
  return {
    type: 'INCREMENT_COUNT'
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT_COUNT'
  }
}

export const reset = () => {
  return {
    type: 'RESET_COUNT'
  }
}
