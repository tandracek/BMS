import React, { Component } from 'react';
import Loading from './loading';
import '../css/searchresults.css';

//TODO build and implement module that actually makes the api call
const runSearch = function (value) {
    const results = [
        { img: 'image1', title: 'Back to the Future', descr: 'Time travel' },
        { img: 'image2', title: 'Back to the Future Part 2', descr: 'Time travel part 2' },
        { img: 'image3', title: 'Die Hard', descr: 'John McClane' }
    ];
    return Promise.resolve(results);
}

export default class SearchResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            loading: true
        }
    }
    handleClick = (title) => {
        this.props.onTitleRoute(title);
    }
    performSearch(query) {
        this.setState({
            loading: true,
            results: []
        });
        this.search = query.slice(1);
        runSearch(this.search).then((results) => {
            this.setState({
                results: results,
                loading: false
            });
        }).catch((err) => {
            alert(err.toString());
        });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.search !== this.props.location.search) {
            this.performSearch(nextProps.location.search);
        }
    }
    componentDidMount() {
        this.performSearch(this.props.location.search);
    }
    render() {
        return React.createElement(SearchResults, { results: this.state.results, loading: this.state.loading, onClick: this.handleClick });
    }
}

const SearchResults = ({ results, loading, onClick }) => {
    function renderResult({ image, title, descr }) {
        return (
            <li className="result" key={title} onClick={() => onClick(title)}>
                <img className="result-image" />
                <h3 className="result-heading">{title}</h3>
                <p className="result-descr">{descr}</p>
            </li>
        );
    }
    return (
        <div className="results-container">
            <Loading isLoading={loading} />
            <ul className="results-list">
                {results.map(renderResult)}
            </ul>
        </div>
    );
}