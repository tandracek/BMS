import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import TitleContainer from './components/title';
import HomeContainer from './components/home';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const MainApp = ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/' component={App} />
        </div>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
