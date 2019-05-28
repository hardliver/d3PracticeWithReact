import React, { Component } from 'react';
import './App.css';
import * as d3 from "d3";
import { select } from 'd3-selection';

class App extends Component {

  componentDidMount() {
    let data = [10, 50, 80];
    let r = 300;

    let color = d3.scaleOrdinal()
      .range(['red', 'blue', 'orange']);

    let canvas = select('.d3')
      .append('svg')
      .attr('width', 1500)
      .attr('height', 1500);

    let group = canvas.append('g')
      .attr('transform', 'translate(300, 300)');

    let arc = d3.arc()
      .innerRadius(0)
      .outerRadius(r);

    let pie = d3.pie()
      .value((d) => { return d; });

    let arcs = group.selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', (d) => { return color(d.data); });

    arcs.append('text')
      .attr('transform', (d) => { return 'translate(' + arc.centroid(d) + ')';})
      .attr('text-anchor', 'middle')
      .attr('font-size', '1.5em')
      .text((d) => { return d.data; });

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
