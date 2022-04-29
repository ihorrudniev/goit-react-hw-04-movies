import 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// import express from 'express';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars

const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(BASE_URL);
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

async function getPopularMovies() {
  try {
    const config = {
      url: `trending/movie/day`,
    };
    const { data } = await axios(config);

    return data.results;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

async function getMoviesByKeyWord(query) {
  try {
    const config = {
      url: `search/movie`,
      params: {
        query,
      },
    };
    const { data } = await axios(config, query);

    return data.results;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

async function getMovieById(id) {
  try {
    const config = {
      url: `movie/${id}`,
    };
    const { data } = await axios(config, id);

    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

async function getCastInfo(id) {
  try {
    const config = {
      url: `movie/${id}/credits`,
    };
    const { data } = await axios(config, id);

    return data.cast;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

async function getMovieReviews(id) {
  try {
    const config = {
      url: `movie/${id}/reviews`,
    };
    const { data } = await axios(config, id);

    return data.results;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

const api = {
  getPopularMovies,
  getMoviesByKeyWord,
  getMovieById,
  getCastInfo,
  getMovieReviews,
};

export default api;
