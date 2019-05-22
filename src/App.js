import React, { Component } from 'react';
import './App.css';
import * as d3 from "d3";
import { select } from 'd3-selection';

class App extends Component {

  componentDidMount() {
    select('.d3').append('p').text('Hi, what\'s up');
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
