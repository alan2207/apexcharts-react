import React, { Component } from 'react';
import ApexCharts from 'apexcharts';
import { func, object } from 'prop-types';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    this.chart.render();
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  init() {
    const { options } = this.props;
    this.chart = new ApexCharts(this.chartRef.current, options);
    this.chart.render();
    this.props.expose && this.props.expose(this.chart);
  }

  restart() {
    this.chart.destroy();
    this.init();
  }

  render() {
    return <div ref={this.chartRef} />;
  }
}

ApexChart.propTypes = {
  options: object.isRequired,
  expose: func
};

export default ApexChart;
