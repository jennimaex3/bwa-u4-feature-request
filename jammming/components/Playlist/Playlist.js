import React from 'react';
import Playlist from './Playlist.css';
import TrackList from './TrackList.js';

export class Playlist extends React.Component() {
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  //step 61
  handleNameChange(event){
   <input onChange={Playlist.onChange}/>
  }
  render(){
    return(
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
        <!-- Add a TrackList component -->
        <!-- <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove}/> -->
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}
