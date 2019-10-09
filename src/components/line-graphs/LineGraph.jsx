/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-shorthand */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

let myLineChart;

export default class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.data !== prevProps.data
      && this.props.labels
      && prevProps.labels
    ) {
      this.buildChart();
    }
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext('2d');
    if (typeof myLineChart !== 'undefined') myLineChart.destroy();

    const { labels, data } = this.props;
    myLineChart = new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: labels,
        datasets: data,
      },
      options: {
        scales: {
          yAxes: [
            {
              id: 'PSI',
              type: 'linear',
              position: 'left',
              display: 'auto',
              scaleLabel: {
                display: true,
                labelString: 'PSI',
              },
            },
            {
              id: 'F',
              type: 'linear',
              position: 'left',
              display: 'auto',
              scaleLabel: {
                display: true,
                labelString: 'F',
              },
            },
            {
              id: '%',
              type: 'linear',
              position: 'left',
              display: 'auto',
              scaleLabel: {
                display: true,
                labelString: '%',
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                maxTicksLimit: 6,
              },
            },
          ],
        },
        animation: {
          duration: 0,
        },
        responsive: true,
        tooltips: {
          intersect: false,
          enabled: true,
          mode: 'index',
          axis: 'x',
        },
      },
    });
  };

  render() {
    return <canvas id="myChart" ref={this.chartRef} />;
  }
}

LineGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.number),
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    label: PropTypes.string,
    fill: PropTypes.bool,
    pointRadius: PropTypes.number,
    yAxisID: PropTypes.string,
  })).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};
