import React, { Component } from "react";

import SearchBar from "./components/SearchBar";
import "./App.css";
import Youtube from "./apis/youtube";

class App extends Component {
  state = {
    videos: []
  };

  onTermSubmit = async term => {
    //assyncronous API request
    //q means the term to be search
    const response = await Youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{" "}
        {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
