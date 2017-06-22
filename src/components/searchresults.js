import React, { Component } from 'react';
import '../css/searchresults.css';

export default class SearchResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.results = [
            { img: 'image1', title: 'Back to the Future', descr: 'Time travel' },
            { img: 'image2', title: 'Back to the Future Part 2', descr: 'Time travel part 2' },
            { img: 'image3', title: 'Die Hard', descr: 'John McClane' }
        ];
        const query = this.props.location.search;
        this.search = query.slice(1);
    }
    render() {
        return React.createElement(SearchResults, { results: this.results });
    }
}

const SearchResults = ({ results }) => {
    function renderResult({ image, title, descr }) {
        return (
            <li className="result" key={title}>
                <img className="result-image" />
                <h3 className="result-heading">{title}</h3>
                <p className="result-descr">{descr}</p>
            </li>
        );
    }
    return (
        <div className="results-container">
            <ul className="results-list">
                {results.map(renderResult)}
            </ul>
        </div>
    );
}