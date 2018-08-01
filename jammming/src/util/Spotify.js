import React from 'react';

const userAccessToken = '';
const clientId = '';
const redirectUri = 'http://localhost:3000/';

class Spotify extends React.Component(){
  getAccessToken(){
    //step 78
    if(userAccessToken = ''){
      return;
    }
    else {

    }
  }
  render(){
    return;
  }

  search(term){
    fetch('https://api.spotify.com/v1/search?type=track&q=TERM')
      .then(response => response.json())
      .then(data => this.setState({ 'https://api.spotify.com/v1/search?type=track&q=TERM' }));
  }
}

export default Spotify;
