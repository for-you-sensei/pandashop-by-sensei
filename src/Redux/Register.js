export function reRegister(state = false, action) {
  switch (action.type) {
    case "REGISTER":
      return action.payload;

    default:
      return state;
  }
}

export function acRegister(payload) {
  return {
    payload,
    type: "REGISTER",
  };
}
