export function reLogin(state = false, action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;

    default:
      return state;
  }
}

export function acLogin(payload) {
  return {
    payload,
    type: "LOGIN",
  };
}
