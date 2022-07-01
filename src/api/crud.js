//
import axios from "axios";


// GET Searched
const getSearched = async (search) => {
  let data = [];


  let response = await axios.get(  `https://api.themoviedb.org/3/search/movie?api_key=8c5825603819c6565d47f38f78f6d76d&language=en-US&query=${search}&page=1&include_adult=true`);
  if (response) {
    data = response.data;
    return data.results[0];
  }
  return data.results[0];
};

export { getSearched };
