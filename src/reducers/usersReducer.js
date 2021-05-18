const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      // return [...(state.filter(user => user.id !== action.payload.id)), action.payload];
      return [...state, action.payload];
    default:
      return state;
  }
};

export default usersReducer;
