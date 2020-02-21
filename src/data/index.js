import { data as electricityData } from './electricity.json';
import { data as pageviewsData } from './pageviews.json';
import { data as restaurantData } from './restaurant.json';
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
    const locationData = getRawLocation(electricityData, location);

    const dates = _.map(prediction, ({ ts }) => {
      return ts;
    });

    const series = [
      {
        name: 'Prediction',
        type: 'line',
        data: _.map(prediction, ({ v1 }) => {
          return v1;
        })
      }
    ];

    if (weatherVariable === 'precipitation') {
      series.push(
        {
          name: 'Precipication (mm)',
          type: 'line',
          data: _.map(prediction, ({ v2 }) => {
            return v2;
          })
        }
      );
    } else {
      series.push(
        {
          name: 'Temperature (C)',
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
      analysis: [
        locationData.location.temp_corr,
        locationData.location.precip_corr
      ],
      legend,
    };

    return output;
  },
  getPerformanceData: (location, weatherVariable) => {
    const { performance } = getDataByLocation(electricityData, location);
    const locationData = getRawLocation(electricityData, location);

    const filteredPerformanceData = getFilteredPerformanceData(performance);

    const dates = _.map(filteredPerformanceData, ({ ts }) => {
      return ts;
    });

    const series = [
      {
        name: 'Actual',
        type: 'line',
        data: _.map(filteredPerformanceData, ({ v1 }) => {
          return v1;
        })
      },
      {
        name: 'Predicted',
        type: 'line',
        data: _.map(filteredPerformanceData, ({ v2 }) => {
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
      analysis: [
        locationData.location.accuracy
      ],
      legend,
    };

    return output;
  }
}

const RestaurantService = {
  getLocationOptions: () => {
    return _.map(restaurantData, ({ location }) => {
      return {
        value: location.name,
        label: _.startCase(_.toLower(location.name))
      };
    })
  },
  getPredictionData: (location, weatherVariable) => {
    const { prediction } = getDataByLocation(restaurantData, location);
    const locationData = getRawLocation(restaurantData, location);
    const dates = _.map(prediction, ({ ts }) => {
      return ts;
    });

    const series = [
      {
        name: 'Prediction',
        type: 'line',
        data: _.map(prediction, ({ v1 }) => {
          return v1;
        })
      }
    ];

    if (weatherVariable === 'precipitation') {
      series.push(
        {
          name: 'Precipication (mm)',
          type: 'line',
          data: _.map(prediction, ({ v2 }) => {
            return v2;
          })
        }
      );
    } else {
      series.push(
        {
          name: 'Temperature (C)',
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
      subtext: `Restaurant sales forecast for ${_.startCase(_.toLower(location))} (2 weeks)`,
      title: "Forecast",
      analysis: [
        locationData.location.temp_corr,
        locationData.location.precip_corr
      ],
      legend,
    };

    return output;
  },
  getPerformanceData: (location, weatherVariable) => {
    const { performance } = getDataByLocation(restaurantData, location);
    const locationData = getRawLocation(restaurantData, location);

    const filteredPerformanceData = getFilteredPerformanceData(performance);

    const dates = _.map(filteredPerformanceData, ({ ts }) => {
      return ts;
    });

    const series = [
      {
        name: 'Actual',
        type: 'line',
        data: _.map(filteredPerformanceData, ({ v1 }) => {
          return v1;
        })
      },
      {
        name: 'Predicted',
        type: 'line',
        data: _.map(filteredPerformanceData, ({ v2 }) => {
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
      analysis: [
        locationData.location.accuracy
      ],
      legend,
    };

    return output;
  }
}

const PageviewsService = {
  getLocationOptions: () => {
    return _.map(pageviewsData, ({ location }) => {
      return {
        value: location.name,
        label: _.startCase(_.toLower(location.name))
      };
    })
  },
  getPredictionData: (location, weatherVariable) => {
    const { prediction } = getDataByLocation(pageviewsData, location);
    const locationData = getRawLocation(pageviewsData, location);
    const dates = _.map(prediction, ({ ts }) => {
      return ts;
    });

    const series = [
      {
        name: 'Prediction',
        type: 'line',
        data: _.map(prediction, ({ v1 }) => {
          return v1;
        })
      }
    ];

    if (weatherVariable === 'precipitation') {
      series.push(
        {
          name: 'Precipication (mm)',
          type: 'line',
          data: _.map(prediction, ({ v2 }) => {
            return v2;
          })
        }
      );
    } else {
      series.push(
        {
          name: 'Temperature (C)',
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
      subtext: `Page view forecast for ${_.startCase(_.toLower(location))} (2 weeks)`,
      title: "Forecast",
      analysis: [
        locationData.location.temp_corr,
        locationData.location.precip_corr
      ],
      legend,
    };

    return output;
  },
  getPerformanceData: (location, weatherVariable) => {
    const { performance } = getDataByLocation(pageviewsData, location);
    const locationData = getRawLocation(pageviewsData, location);

    const filteredPerformanceData = getFilteredPerformanceData(performance);

    const dates = _.map(filteredPerformanceData, ({ ts }) => {
      return ts;
    });

    const series = [
      {
        name: 'Actual',
        type: 'line',
        data: _.map(filteredPerformanceData, ({ v1 }) => {
          return v1;
        })
      },
      {
        name: 'Predicted',
        type: 'line',
        data: _.map(filteredPerformanceData, ({ v2 }) => {
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
      analysis: [
        locationData.location.accuracy
      ],
      legend,
    };

    return output;
  }
}

function getDataByLocation(data, location) {
  return _.filter(data, item => item.location.name === location)[0];
}

function getRawLocation(data, location) {
  return _.filter(data, item => item.location.name === location)[0];
}

function getFilteredPerformanceData(data) {
  return _.filter(data, item => _.includes(item.ts, '-02-'));
}

const DataService = {
  electricity: ElectricityService,
  restaurant: RestaurantService,
  pageviews: PageviewsService,
}

export default DataService;