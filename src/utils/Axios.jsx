import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmE2ZjAwZTgwOTZjOTFiNTFhNDg5ZDU2NGFmN2JmMCIsInN1YiI6IjY2MWJiMGFiNWUxNGU1MDE4NWJiNzNlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WK2eN5P7YhB_7GGj03S7hbYvw_zLBYoSQgazA7Hk7ac'
  }
});

export default instance;
