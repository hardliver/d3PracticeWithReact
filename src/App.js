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

    let group = canvas.append('g')
      .attr('transform', "translate(100, 100)")

    let r = 100;
    let p = Math.PI * 2;

    let arc = d3.arc()
      .innerRadius(r - 20)
      .outerRadius(r)
      .startAngle(0)
      .endAngle(p)

    group.append('path')
      .attr('d', arc)

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
