import React, { Component } from 'react';
import Chart from 'apexcharts-react';
import options from './chart-options';

class App extends Component {
  state = {
    options
  };
  // restart data to to initial values
  handleRestart = () => {
    this.chart.updateOptions(
      {
        series: [
          {
            name: 'Inflation',
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
          }
        ]
      },
      true
    );
  };

  // update data with random values
  handleUpdate = () => {
    this.chart.updateSeries([
      {
        data: new Array(12)
          .fill(0)
          .map(i => Number((Math.random() * (100 - 0) + 0).toFixed(1)))
      }
    ]);
  };

  render() {
    return (
      <div className="App">
        <Chart
          expose={chart => (this.chart = chart)}
          options={this.state.options}
        />
        <button onClick={this.handleRestart}>Restart</button>
        <button onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }
}

export default App;
