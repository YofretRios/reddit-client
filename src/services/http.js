import axios from 'axios';

export default axios.create({
  baseURL: 'https://reddit-tops-api.herokuapp.com/'
});
