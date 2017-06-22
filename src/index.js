import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute } from 'react-router';
import App from './App';
import TitleContainer from './components/title';
import HomeContainer from './components/home';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const MainApp = ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={HomeContainer} />
            <Route path="/title/:title" component={TitleContainer} />
        </Route>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
