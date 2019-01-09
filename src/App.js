import React, { Component } from "react";

import SearchBar from "./components/SearchBar";
import "./App.css";
import Youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onTermSubmit("ReactJs");
  }

  onTermSubmit = async term => {
    //assyncronous API request
    //q means the term to be search
    const response = await Youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
      //this is going to show the first video on the list
      //in the beggining
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
