import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import SearchBarContainer from './components/searchbar.js';
import HomeContainer from './components/home.js';
import TitleContainer from './components/title.js';
import SearchResultsContainer from './components/searchresults.js';
import PropsRoute from './components/propsroute.js';
import './css/font-awesome.css';
import './css/skeleton.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    /*this.props.history.listen((location, action) => {
      this.setState({
        loading: true
      });
    });*/
  }
  handleSearchRoute = (search) => {
    this.props.history.push(`/search?${search}`);
  }
  handleTitleRoute = (title) => {
    this.props.history.push(`/title/${title}`);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <SearchBarContainer history={this.props.history} onSearchRoute={this.handleSearchRoute} onTitleRoute={this.handleTitleRoute} />
        </div>
        <div className="App-main" id="main_view">
          <Switch>
            <PropsRoute exact path='/' component={HomeContainer} />
            <PropsRoute path='/title/:title' component={TitleContainer} />
            <PropsRoute path='/search' component={SearchResultsContainer} onTitleRoute={this.handleTitleRoute} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default withRouter(App);
