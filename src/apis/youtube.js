import axios from "axios";

const KEY = "AIzaSyClN09SYOyX_einD4LU5HdWdo_HQK_soRA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

//see https://developers.google.com/youtube/v3/docs/search/list
