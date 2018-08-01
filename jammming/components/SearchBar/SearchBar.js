import './SearchBar.css';

import React from 'react';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  handleTermChange(event){
    //step 71
    setState({searchBar.term.event = searchBar.target.event});
  }
  search(){
    //step 69
    this.state.props.onSearch;
  }
  render(){
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <a>SEARCH</a>
      </div>
    );
  }
}
