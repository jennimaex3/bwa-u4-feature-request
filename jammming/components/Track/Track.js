import './Track.css';
import React from 'react';

export class Track extends React.Component() {
  constructor(props) {
    super(props);
    this.isRemoval = false;
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  renderAction() {
    if(this.isRemoval === true) {
      return <div onClick{this.removeTrack}> - </div>
    }
    else {
      return <div onClick={this.addTrack}> + </div>
    }
  }
  addTrack() {
   {this.props.track}
  }
  //step 53
  removeTrack(this.props.onRemove){
   this.setState({this.props.track : this.props.onRemove})
  }
  render(){
    return(
      <div className="Track">
        <div className="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
        <a className="Track-action">{this.renderAction}<!-- + or - will go here --></a>
      </div>
    );
  }
}
