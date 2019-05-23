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

    let circle = canvas.append('circle')
      .attr('cx', 50)
      .attr('cy', 50)
      .attr('r', 25);

    circle.transition()
      .duration(1500)
      .delay(1000)
      .attr('cx', 150)
      // .transition()
      // .attr('cy', 200)
      // .transition()
      // .attr('cx', 50)
      .on('end', function() { select(this).attr('fill', 'red'); });

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
