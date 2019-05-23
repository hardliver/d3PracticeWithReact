import React, { Component } from 'react';
import './App.css';
import * as d3 from "d3";
import { select } from 'd3-selection';

import data from './data/data.json'

class App extends Component {

  state = {
    people: []
  }

  componentWillMount() {
    this.setState({
      people: data
    })
  }

  componentDidMount() {
    let canvas = select('.d3')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500)

    canvas.selectAll('rect')
      .data(this.state.people)
      .enter()
        .append('rect')
        .attr('width', (d) => { return d.age * 10; })
        .attr('height', 48)
        .attr('y', (d, i) => { return i * 50; })
        .attr('fill', 'blue');

    canvas.selectAll('text')
      .data(this.state.people)
      .enter()
        .append('text')
        .attr('fill', 'white')
        .attr('y', (d, i) => { return i * 50 + 24; })
        .text((d) => { return d.name })
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
