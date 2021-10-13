import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinderbackendheroku.herokuapp.com/",
});

export default instance;
