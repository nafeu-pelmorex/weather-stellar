import DataService from '../../data';
import _ from 'lodash';

export const initialState = {
  file: {},
  location: null,
  locationOptions: [],
  prediction: {
    series: [],
    dates: [],
    subtext: "",
    legend: [],
    title: "Forecast",
    analysis: [],
  },
  performance: {
    series: [],
    dates: [],
    legend: [],
    subtext: "",
    title: "Performance",
    analysis: [],
  },
  weatherVariable: 'temperature',
  industry: 'electricity',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPLOAD_FILE':
      const industry = getIndustryByFilename(action.payload.name);
      console.log({ industry });
      const locationOptions = DataService[industry].getLocationOptions();
      return {
        ...state,
        file: action.payload,
        industry,
        locationOptions,
        location: locationOptions[0].value,
        prediction: DataService[industry].getPredictionData(locationOptions[0].value, 'temperature'),
        performance: DataService[industry].getPerformanceData(locationOptions[0].value, 'temperature'),
      };
    case 'SELECT_LOCATION':
      return {
        ...state,
        location: action.payload,
        prediction: DataService[state.industry].getPredictionData(action.payload, state.weatherVariable),
        performance: DataService[state.industry].getPerformanceData(action.payload, state.weatherVariable),
      };
    case 'SELECT_WEATHER_VARIABLE':
      return {
        ...state,
        weatherVariable: action.payload,
        prediction: DataService[state.industry].getPredictionData(state.location, action.payload),
        performance: DataService[state.industry].getPerformanceData(state.location, action.payload),
      };
    default:
      return state;
  }
};

function getIndustryByFilename(name) {
  if (_.includes(name, 'restaurant') || _.includes(name, 'sircorp')) {
    return 'restaurant';
  }
  if (_.includes(name, 'pageviews')) {
    return 'pageviews';
  }
  return 'electricity'
}