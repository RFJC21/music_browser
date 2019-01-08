import React, { Component } from "react";

import SearchBar from "./components/SearchBar";
import "./App.css";
import Youtube from "./apis/youtube";
import VideoList from "./components/VideoList";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
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

  onVideoSelect = video => {
    console.log("from app.js", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
