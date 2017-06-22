import React, { Component } from 'react';

export default class TitleContainer extends Component {
    render() {
        console.log(this.props);
        return React.createElement(Title, { title: this.props.match.params.title });
    }
}

const Title = (props) => {
    return (
        <div>
            {props.title}
        </div>
    )
}