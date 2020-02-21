import React from 'react';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment';


function Chart({
  title,
  subtext,
  dates,
  series,
  legend,
}) {

  const options = {
    title: {
      text: title,
      subtext: subtext,
      left: 'left'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: legend
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        formatter: (value, idx) => {
          return idx === 0 ? value : moment(value).format('ll');
        }
      },
      data: dates
    },
    yAxis: {
      type: 'value'
    },
    series,
  };

  return (
    <ReactEcharts
      option={options}
      notMerge={true}
      lazyUpdate={true}
      theme={"default"}
    />
  );
}

export default Chart;
