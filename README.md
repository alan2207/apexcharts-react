# Apexcharts-React

Unofficial react wrapper for [apexcharts.js](https://apexcharts.com/)

### Getting Started:

Install the package:
`npm install apexcharts-react`

### Usage:

```js
import React from 'react';
import Chart from 'apexcharts-react';

class ExampleComponent extends React.Component() {
  render() {
    return (
      <div className="App">
        <Chart
          expose={chart => (this.chart = chart)}
          options={this.state.options}
        />
      </div>
    );
  }
}
```

There is also an example app inside the `example` folder.

### Props:

- `options` - object.isRequired - options for the chart - for more info check out the [docs](https://apexcharts.com/)

- `expose` - func - function that exposes the chart instance to the parent component in order to enable user to call the instance methods from the outside of the chart component

For more info about how to create chart check out the official [docs](https://apexcharts.com/).
