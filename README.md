# Apexcharts-React

[![NpmVersion](https://img.shields.io/badge/npm-1.0.0-blue.svg)](https://www.npmjs.com/package/apexcharts-react)

Unofficial react wrapper for [apexcharts.js](https://apexcharts.com/)

### Getting Started:

Install the package:
`npm install apexcharts-react`

### Usage:

```js
import React from 'react';
import Chart from 'apexcharts-react';

const options = {...} // check out the docs

class ExampleComponent extends React.Component() {
  this.state = {
    options
  }

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

For more info on how to create charts check out the official [docs](https://apexcharts.com/).
