import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzA5YWE1NWU5MzcxZmE1YTliNDExOWVjOWQwZTVmNiIsIm5iZiI6MTcyMTE0NTIyOC4xNDY3NzksInN1YiI6IjY2OTU1MjQ3YmYwMmFmYzdlMmY0MWY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G0DFMwzaHWelzqpzoT8nMp1zD6hhX3OSHMPih5A1fDE'
  }
});

export default instance;
