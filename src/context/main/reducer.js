export const initialState = {
  count: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementCount':
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
