export function reFilter(state = false, action) {
  switch (action.type) {
    case "FILTER":
      return action.payload;

    default:
      return state;
  }
}

export function acFilter(payload) {
  return {
    payload,
    type: "FILTER",
  };
}
