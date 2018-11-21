export function AppActions(state = 0, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
}

export function StudentActions(state = [], action) {
  switch (action.type) {
    case "ADD_STUD":
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}
