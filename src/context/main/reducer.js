export const initialState = {
  file: {},
  location: null,
  weatherVariable: 'temperature',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPLOAD_FILE':
      return {
        ...state,
        file: action.payload,
      };
    case 'SELECT_LOCATION':
      return {
        ...state,
        location: action.payload,
      };
    case 'SELECT_WEATHER_VARIABLE':
      return {
        ...state,
        weatherVariable: action.payload,
      };
    default:
      return state;
  }
};
