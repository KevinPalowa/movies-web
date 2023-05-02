import axios from "axios";
const API_KEY = "1f26fdf0794ccc45f920074433eb11c6";
const AXIOS_INSTANCE = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: API_KEY },
});

export default AXIOS_INSTANCE;
