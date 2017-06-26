import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom';
import '../css/searchbar.css';

const performSearch = function (text) {
    const results = [
        { img: 'image1', title: 'Back to the Future', descr: 'Time travel' },
        { img: 'image2', title: 'Back to the Future Part 2', descr: 'Time travel part 2' }
    ];
    return Promise.resolve(results);
}

export default class SearchBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultsVisible: false,
            loading: false,
            results: [],
            input: ''
        }
    }
    clearBar() {
        clearTimeout(this.searchTimeout);
        this.setState({
            results: [],
            input: ''
        });
    }
    handleClick = (e) => {
        this.clearBar();
        this.props.history.push(`/search?${this.state.input}`);
    }
    handleResultClick = (title) => {
        this.clearBar();
        this.props.history.push(`/title/${title}`);
    }
    handleOnKeyUp = (e) => {
        if (this.searchTimeout)
            clearTimeout(this.searchTimeout);

        const value = e.target.value;
        this.setState({
            input: value
        });
        if (value.length < 2){
            return;
        }

        this.searchTimeout = setTimeout(() => {
            this.setState({
                loading: true
            })
            performSearch(value).then((results) => {
                this.setState({
                    resultsVisible: !this.state.resultsVisible,
                    results: results,
                    loading: false,
                    input: value
                });
            }).catch((err) => {
                //TODO create better alert system
                alert('Caught error: ' + err.toString());
            });
        }, 1000);
    }
    render() {
        return React.createElement(SearchBar, { loading: this.state.loading, resultsVisible: this.state.resultsVisible, results: this.state.results, onKeyUp: this.handleOnKeyUp, 
            onClick: this.handleClick, onResultClick: this.handleResultClick });
    }
}

const SearchBar = ({ loading, resultsVisible, results, onKeyUp, onClick, onResultClick }) => {
    return (
        <div className="search-bar-container">
            <input className="search-bar-input" type="text" placeholder="Search..." onKeyUp={onKeyUp} />
            <div className="search-bar-button" onClick={onClick}><i className="fa fa-search" aria-hidden="true"></i></div>
            {loading ? (<i className="fa fa-spinner fa-spin fa-2x fa-fw" />) : null}
            <ul className="search-bar-results">
                {resultsVisible ? results.map((result) => { return <LiveSearchResults key={'live_' + result.img} result={result} onClick={onResultClick} /> }) : null}
            </ul>
        </div>
    );
}

const LiveSearchResults = ({ result, onClick }) => {
    return (
        <li className="live-search-result" onClick={() => { onClick(result.title) }} >
            <div className="live-search-pic">
                {result.img}
            </div>
            <div className="live-search-descr">
                {result.title}
            </div>
        </li>
    )
}