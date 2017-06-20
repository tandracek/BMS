import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/search.css';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultsVisible: false,
            loading: false,
            results: []
        }
    }
    handleClick = () => {
        performSearch();
    }
    handleOnKeyUp = (e) => {
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
        return (
            <div id="searchBarContainer">
                <div className="row">
                    <input className="ten columns main-search" type="text" placeholder="Search..." onKeyUp={this.handleOnKeyUp} />
                    <div className="two columns search-button" onClick={this.handleClick}><i className="fa fa-search" aria-hidden="true"></i></div>
                    {this.state.loading ? (<i className="fa fa-spinner fa-spin fa-2x fa-fw" />) : null }
                </div>
                <div className="row">
                    <ul className="ten columns">
                        {this.state.resultsVisible ? this.state.results.map((result) => { return <LiveSearchResults key={'live_' + result.img} results={result} /> }) : null}
                    </ul>
                </div>
            </div>
        );
    }
}

const performSearch = function (text) {
    const results = [
        { img: 'image1', title: 'Back to the Future', descr: 'Time travel' },
        { img: 'image2', title: 'Back to the Future Part 2', descr: 'Time travel part 2' }
    ];
    //ReactDOM.render(<SearchResults results={results} />, document.getElementById('main_view'));
    return Promise.resolve(results);
}

export class LiveSearchResults extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="live-search-result">
                <div className="live-search-pic">
                    {this.props.results.img}
                </div>
                <div className="live-search-descr">
                    {this.props.results.title}
                </div>
            </li>
        )
    }
}

// Set a state that holds the data for the search results
export class SearchResults extends Component {
    constructor(props) {
        super(props);
        const results = props.results || [];
        this.state = {
            results: results
        }
    }
    render() {
        return (
            <div className="results-container">
                <ul className="results-list">
                    {this.state.results.map((result) => {
                        return <SearchResult result={result} key={'deferred_' + result.img} />
                    })}
                </ul>
            </div>
        );
    }
}

export class SearchResult extends Component {
    render() {
        return (
            <li className="result">
                <img className="result-image" />
                <h3 className="result-heading">{this.props.result.title}</h3>
                <p className="result-descr">{this.props.result.descr}</p>
            </li>
        )
    }
}