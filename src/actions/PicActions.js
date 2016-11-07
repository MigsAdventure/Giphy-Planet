import axios from 'axios';
export function searchGif(search) {
  return {
    type: 'SEARCH_GIF',
    payload: axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&limit=64`),
  };
}

export function getGif(id) {
  return {
    type: 'GET_GIF',
    payload: axios.get(`http://api.giphy.com/v1/gifs/${id}?api_key=dc6zaTOxFJmzC`),
  };
}
