import React, { Component } from 'react';
import './App.css';
import * as d3 from "d3";
import { select } from 'd3-selection';

class App extends Component {

  componentDidMount() {
    let canvas = select('.d3')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500);

    let data = [
      {x: 10, y: 20},
      {x: 40, y: 60},
      {x: 50, y: 70}
    ];

    let group = canvas.append('g')
      .attr('transform', "translate(100, 100)")

    let line = d3.line()
      .x((d) => { return d.x; })
      .y((d) => { return d.y; });

    group.selectAll('path')
      .data([data])
      .enter()
        .append('path')
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', '#000')
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
