import React, { Component } from 'react';
import './App.css';
import * as d3 from "d3";
import { select } from 'd3-selection';

class App extends Component {

  componentDidMount() {

    let data = [10];

    let canvas = select('.d3')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500);

    let circle1 = canvas.append('circle')
      .attr('cx', 50)
      .attr('cy', 100)
      .attr('r', 25);

    let circle2 = canvas.append('circle')
      .attr('cx', 50)
      .attr('cy', 200)
      .attr('r', 25);

    let circles = canvas.selectAll('circle')
      .data(data)
      .attr('fill', 'green')
      .exit()
        .attr('fill', 'blue');

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
