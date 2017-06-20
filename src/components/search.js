import React, { Component } from 'react';
import '../css/main.css';
//import '../css/search.css';

export class Search extends Component {
  render() {
    return (
      <div className="row">
        <div className="twelve columns">
            <input className="main-search" type="text" placeholder="Search..." />
            <div className="search-button"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
      </div>
    );
  }
}

// Set a state that holds the data for the search results
export class SearchResults extends Component {
    render() {
        return (
            <div>
                <ul>
                </ul>
            </div>
        );
    }
}

export class SearchResult extends Component {
    render() {
        return (
            <li>
                <img />
                <h3 />
                <p />
            </li>
        )
    }
}