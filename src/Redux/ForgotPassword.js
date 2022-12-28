export function reForgotPass(state = false, action) {
  switch (action.type) {
    case "Forgot":
      return action.payload;

    default:
      return state;
  }
}

export function acForgotPass(payload) {
  return {
    payload,
    type: "Forgot",
  };
}
