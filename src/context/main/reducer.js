export const initialState = {
  file: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPLOAD_FILE':
      return {
        ...state,
        file: action.payload,
      };
    default:
      return state;
  }
};
