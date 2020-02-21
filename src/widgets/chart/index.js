import React from 'react';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment';

const option = {
  title: {
    text: 'Forecast',
    subtext: 'Sales forecast for dining rooms at [LOCATION]',
    left: 'left'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      animation: false,
      label: {
          backgroundColor: '#ccc',
          borderColor: '#aaa',
          borderWidth: 1,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          color: '#222'
      }
    },
    formatter: function (params) {
      return '[FORMATTER]';
      // return params[2].name + '<br />' + params[2].value;
    }
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      formatter: (value, idx) => {
        return idx === 0 ? value : moment(value).format('ll');
      }
    },
    splitLine: {
        show: false
    },
    boundaryGap: false,
    data: ["2020-02-20", "2020-02-21", "2020-02-22", "2020-02-23", "2020-02-24", "2020-02-25", "2020-02-26", "2020-02-27", "2020-02-28", "2020-02-29", "2020-03-01", "2020-03-02", "2020-03-03", "2020-03-04", "2020-03-05"]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    },
    {
      data: [824, 232, 601, 134, 1390, 730, 1320],
      type: 'line'
    },
  ]
}

const events = {}
const opts = {}

function Chart() {
  const onChartReady = () => {
    console.log('chart ready...');
  }

  return (
    <ReactEcharts
      option={option}
      notMerge={true}
      lazyUpdate={true}
      theme={"default"}
      onChartReady={onChartReady}
      onEvents={events}
      opts={opts}
    />
  );
}

export default Chart;
