import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import '../css/search.css';

const performSearch = function (text) {
    const results = [
        { img: 'image1', title: 'Back to the Future', descr: 'Time travel' },
        { img: 'image2', title: 'Back to the Future Part 2', descr: 'Time travel part 2' }
    ];
    //ReactDOM.render(<SearchResults results={results} />, document.getElementById('main_view'));
    return Promise.resolve(results);
}

export default class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultsVisible: false,
            loading: false,
            results: []
        }
    }
    handleClick = () => {
        console.log('handling click');
        const results = [
            { img: 'image1', title: 'Back to the Future', descr: 'Time travel' },
            { img: 'image2', title: 'Back to the Future Part 2', descr: 'Time travel part 2' }
        ];
        const searchResults = React.createElement(SearchResults, { results: results });
        ReactDOM.render(searchResults, document.getElementById('main_view'));
    }
    handleOnKeyUp = (e) => {
        console.log('handling on key up');
        if (this.searchTimeout)
            clearTimeout(this.searchTimeout);

        const value = e.target.value;
        if (value.length < 2)
            return;

        this.searchTimeout = setTimeout(() => {
            this.setState({
                loading: true
            })
            performSearch(value).then((results) => {
                this.setState({
                    resultsVisible: !this.state.resultsVisible,
                    results: results,
                    loading: false
                });
            }).catch((err) => {
                //TODO create better alert system
                alert('Caught error: ' + err.toString());
            });
        }, 1000);
    }
    render() {
        return React.createElement(SearchBar, { loading: this.state.loading, resultsVisible: this.state.resultsVisible, results: this.state.results, onKeyUp: this.handleOnKeyUp, onClick: this.handleClick });
    }
}

const SearchBar = ({ loading, resultsVisible, results, onKeyUp, onClick }) => {
    return (
        <div className="search-bar-container">
            <input className="search-bar-input" type="text" placeholder="Search..." onKeyUp={onKeyUp} />
            <div className="search-bar-button" onClick={onClick}><i className="fa fa-search" aria-hidden="true"></i></div>
            {loading ? (<i className="fa fa-spinner fa-spin fa-2x fa-fw" />) : null}
            <ul className="search-bar-results">
                {resultsVisible ? results.map((result) => { return <LiveSearchResults key={'live_' + result.img} result={result} /> }) : null}
            </ul>
        </div>
    );
}

const LiveSearchResults = ({ result }) => {
    return (
        <li className="live-search-result">
            <div className="live-search-pic">
                {result.img}
            </div>
            <div className="live-search-descr">
                {result.title}
            </div>
        </li>
    )
}

const SearchResults = ({ results }) => {
    function renderResult({ image, title, descr }) {
        return (
            <li className="result">
                <img className="result-image" />
                <Link to="/title/{title}">
                    <h3 className="result-heading">{title}</h3>
                    <p className="result-descr">{descr}</p>
                </Link>
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
