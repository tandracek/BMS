import React, { Component } from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';

export default class HomeContainer extends Component {
    render() {
        return <Home />
=======

export default class HomeContainer extends Component {
    render() {
        return React.createElement(Home);
>>>>>>> 4b6e57f1cb42423bff84f27a31f2e03febad2661
    }
}

const Home = (props) => {
    return (
<<<<<<< HEAD
        <div>Home</div>
    );
=======
        <div>
            Home
        </div>
    )
>>>>>>> 4b6e57f1cb42423bff84f27a31f2e03febad2661
}