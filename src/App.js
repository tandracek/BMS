import React, { Component } from 'react';
import logo from './logo.svg';
import './css/font-awesome.css';
import './css/skeleton.css';
import './css/main.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Search />
      </div>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <div className="row">
        <div className="twelve columns">
          <input className="main-search" type="text" placeholder="Search..." />
          <span className="input-add"><i className="fa fa-search" aria-hidden="true"></i></span>
        </div>
      </div>
    );
  }
}

export default App;
