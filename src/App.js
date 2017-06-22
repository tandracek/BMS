import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import SearchBarContainer from './components/searchbar.js';
import HomeContainer from './components/home.js';
import TitleContainer from './components/title.js';
import SearchResultsContainer from './components/searchresults.js';
import './css/font-awesome.css';
import './css/skeleton.css';
import './App.css';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.props.history.listen((location, action) => {
      console.log('route changin');
    });
  }
  handleFinishLoad = () => {
    console.log('Finished change');
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <SearchBarContainer history={this.props.history}/>
        </div>
        <div className="App-main" id="main_view">
          <Switch>
            <PropsRoute exact path='/' component={HomeContainer} onFinishLoad={this.handleFinishLoad} />
            <PropsRoute path='/title/:title' component={TitleContainer} onFinishLoad={this.handleFinishLoad} />
            <PropsRoute path='/search' component={SearchResultsContainer} onFinishLoad={this.handleFinishLoad} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
