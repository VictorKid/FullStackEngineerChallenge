import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3030/api",
  timeout: 5000,
});

export default client;
