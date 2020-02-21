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
        name: 'Actual',
        type: 'line',
        data: _.map(performance, ({ v1 }) => {
          return v1;
        })
      },
      {
        name: 'Predicted',
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
        name: 'Actual',
        type: 'line',
        data: _.map(performance, ({ v1 }) => {
          return v1;
        })
      },
      {
        name: 'Predicted',
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
        name: 'Actual',
        type: 'line',
        data: _.map(performance, ({ v1 }) => {
          return v1;
        })
      },
      {
        name: 'Predicted',
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
  restaurant: RestaurantService,
  pageviews: PageviewsService,
}

export default DataService;