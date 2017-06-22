import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TitleContainer extends Component {
    render() {
        return <Title title={this.props.params.title} />
    }
}

const Title = (props) => {
    return (
        <div>{props.title}</div>
    );
}