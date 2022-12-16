export function reMenu(state = false, action) {
  switch (action.type) {
    case "MENU":
      return action.payload;

    default:
      return state;
  }
}

export function acMenu(payload) {
  return {
    payload,
    type: "MENU",
  };
}
