const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((ex) => {
        if (ex.id === action.id) {
          return {
            ...ex,
            ...action.updates,
          };
        } else {
          return ex;
        }
      });
    case "SET_EXPENSES":
      return action.expenses;
    default:
      return state;
  }
};
