import React, { Component } from 'react';
import './App.css';
import * as d3 from "d3";
import { select } from 'd3-selection';

class App extends Component {

  componentDidMount() {
    let canvas = select('.d3')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500)

    let circle = canvas.append('circle')
      .attr('cx', 250)
      .attr('cy', 250)
      .attr('r', 50)
      .attr('fill', 'red');

    let rect = canvas.append('rect')
      .attr('width', 100)
      .attr('height', 50);

    let line = canvas.append('line')
      .attr('x1', 0)
      .attr('y1', 100)
      .attr('x2', 400)
      .attr('y2', 400)
      .attr('stroke', 'green')
      .attr('stroke-width', 10);
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
