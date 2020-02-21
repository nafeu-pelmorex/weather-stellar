import { data as electricityData } from './electricity.json';
import _ from 'lodash';

const ElectricityService = {
  getLocationOptions: () => {
    return _.map(electricityData, ({ location }) => {
      return {
        value: location.name,
        label: _.startCase(_.toLower(location.name))
      };
    })
  },
  getPredictionData: (location, weatherVariable) => {
    const { prediction } = getDataByLocation(electricityData, location);
    const dates = _.map(prediction, ({ ts }) => {
      return ts;
    });

    const series = [
      {
        name: 'prediction',
        type: 'line',
        data: _.map(prediction, ({ v1 }) => {
          return v1;
        })
      }
    ];

    if (weatherVariable === 'precipitation') {
      series.push(
        {
          name: 'precipitation',
          type: 'line',
          data: _.map(prediction, ({ v2 }) => {
            return v2;
          })
        }
      );
    } else {
      series.push(
        {
          name: 'temperature',
          type: 'line',
          data: _.map(prediction, ({ v3 }) => {
            return v3;
          })
        }
      );
    }

    const legend = _.map(series, ({ name }) => { return name; });

    const output = {
      series,
      dates,
      subtext: `Electricity demand forecast for ${_.startCase(_.toLower(location))} (2 weeks)`,
      title: "Forecast",
      analysis: [],
      legend,
    };

    return output;
  },
  getPerformanceData: (location, weatherVariable) => {
    const { performance } = getDataByLocation(electricityData, location);
    const dates = _.map(performance, ({ ts }) => {
      return ts;
    });

    const series = [
      {
        name: 'actual',
        type: 'line',
        data: _.map(performance, ({ v1 }) => {
          return v1;
        })
      },
      {
        name: 'predicted',
        type: 'line',
        data: _.map(performance, ({ v2 }) => {
          return v2;
        })
      }
    ];

    const legend = _.map(series, ({ name }) => { return name; });

    const output = {
      series,
      dates,
      subtext: `Actual vs Predicted`,
      title: "Performance",
      analysis: [],
      legend,
    };

    return output;
  }
}

function getDataByLocation(data, location) {
  return _.filter(data, item => item.location.name === location)[0];
}

const DataService = {
  electricity: ElectricityService,
}

export default DataService;