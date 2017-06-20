import React, { Component } from 'react';
import logo from './logo.svg';
import './css/font-awesome.css';
import './css/skeleton.css';
import './App.css';
import { Search } from './components/search.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
