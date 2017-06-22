import React, { Component } from 'react';

export default class HomeContainer extends Component {
    render() {
        return React.createElement(Home);
    }
}

const Home = (props) => {
    return (
        <div>
            Home
        </div>
    )
}