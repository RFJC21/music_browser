import React from "react";

import VideoItem from "./VideoItem";

//we are referecing the props object
// we are !!!destruturing!!!! the videos property and
// the onVideoSelec
// with this we dont need to use "props.xxx"
const VideoList = ({ videos, onVideoSelect }) => {
  //i have to map each element of the array
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
