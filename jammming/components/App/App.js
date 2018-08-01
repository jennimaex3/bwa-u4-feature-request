import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/searchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';


class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state.searchResults = 'David Bowe';
    this.state.playlistName = 'Workout Playlist';
    this.state.playlistTracks = {
        name: '',
        artist: '',
        album: '',
        id: ''
      };
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

 //step 67
 search(term){
   console.log(this.term);
 }

  //step 57
  updatePlaylistName(name){
  setState({this.playlistName : this.name});
  }
  //step 63
  savePlaylist(){
    let playlistTracks.trackURIs = [
     playlistName : this.playlistName;
    ]
    return Spotify.savePlaylist;
    setState(playlistName) {
      let playListName = 'New Playlist';
      let playlistTracks = [];
    }
  }

  addTrack(track){
    //step 40 and 41
    //onClick '+'
    //series of components to <Track />
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
   }
  }
  //step 49
  removeTrack(track){
    track.id;
  }
  this.addTrack = this.addTrack.bind(this);
  render() {
   return(
     <div>
       <h1>Ja<span className="highlight">mmm</span>ing</h1>
       <div className="App">
         <!-- Add a SearchBar component -->
        <SearchBar onSearch={this.search}/>

         <div className="App-playlist">
           <!-- Add a SearchResults component -->
           <SearchResults searchResults={this.state.searchResults} onAdd={this.state.addTrack}/>

           <!-- Add a Playlist component -->
           <Playlist playlistName={this.state.playlistName} playListTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>

         </div>
       </div>
     </div>
   );
  }
}
