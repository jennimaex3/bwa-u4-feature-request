import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.searchResults = {
      name: '',
      artist: '',
      album: '',
      id: ''
    }
  }
  removeTrack(track.id){
    this.setState({playlistTracks : track.id})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
