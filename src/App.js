import React, { Component } from 'react';
import './App.css';
import * as d3 from "d3";
import { select } from 'd3-selection';

class App extends Component {

  componentDidMount() {
    let dataArray = [5, 40, 50, 60];
    let width = 500;
    let height = 500;

    let widthScale = d3.scaleLinear()
      .domain([0, 60])
      .range([0, width]);

    let color = d3.scaleLinear()
      .domain([0, 60])
      .range(['red', 'blue']);

    let axis = d3.axisBottom()
      .ticks(5)
      .scale(widthScale);

    let canvas = select('.d3')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(20, 0)');

    let bars = canvas.selectAll('rect')
      .data(dataArray)
      .enter()
        .append('rect')
        .attr('width', (d) => { return widthScale(d); })
        .attr('height', 50)
        .attr('fill', (d) => { return color(d) })
        .attr('y', (d, i) => { return i*100 });

    canvas.append('g')
      .attr('transform', 'translate(0, 400)')
      .call(axis);
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
