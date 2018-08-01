import Tracklist from './Tracklist.css';
import Track from '../Track/Track.js';
import React from 'react';

export class TrackList extends React.Component() {

trackList(this.props.tracks)map(track => {
  key = track.id;
  render(){
    this.props.track.name;
    this.props.track.artist;
    this.props.track.album;
  }
  }
);

  render() {

    return(
      <div className="TrackList">
      <!-- You will add a map method that renders a set of Track components  -->

      <!-- step 23: hardcode 3 tracks -->
      <Track track={this.props.track} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>
      <Track track={this.props.track} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>
      <Track track={this.props.track} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>
      </div>
    );
  }
}
