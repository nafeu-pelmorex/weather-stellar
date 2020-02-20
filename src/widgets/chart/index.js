import React from 'react';
import ReactEcharts from 'echarts-for-react';

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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
