import './SearchResults.css';
import React from 'react';
import TrackList from './Tracklist.js';

export class SearchResults extends React.Component() {
  render(){
    return(
      <div className="SearchResults">
        <h2>Results</h2>
        <!-- Add a TrackList component -->
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
      </div>

    );
  }
}
