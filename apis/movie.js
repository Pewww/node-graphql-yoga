const {BASE_URL} = require('./env');
const {default: axios} = require('axios');

const getMovies = async(limit, rating) => {
  const {
    data: {
      data: {
        movies
      }
    }
  } = await axios.get(`${BASE_URL}/list_movies.json`, {
    params: {
      limit,
      minimum_rating: rating
    }
  });

  return movies;
};

module.exports.getMovies = getMovies;
