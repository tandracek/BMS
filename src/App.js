import React, { Component } from 'react';
import './css/font-awesome.css';
import './css/skeleton.css';
import './App.css';
import SearchContainer from './components/search.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainView: null
    }
  }
  updateMain = (viewComponent) => {
    this.setState({
      mainView: viewComponent
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <SearchContainer />
        </div>
        <div className="App-main" id="main_view">
          {this.state.mainView}
        </div>
      </div>
    );
  }
}

export default App;
