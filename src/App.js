import React, { Component } from 'react';
import './App.css';
import * as d3 from "d3";
import { select } from 'd3-selection';

class App extends Component {

  componentDidMount() {
    let dataArray = [20, 40, 50];

    let canvas = select('.d3')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500);

    let bars = canvas.selectAll('rect')
      .data(dataArray)
      .enter()
        .append('rect')
        .attr('width', (d) => { return d*10; })
        .attr('height', 50)
        .attr('y', (d, i) => { return i*100 });
  }

  render() {
    return (
      <div className="App">
        <h1>D3 Practice</h1>
        <div className='d3' />
      </div>
    );
  }
}

export default App;
