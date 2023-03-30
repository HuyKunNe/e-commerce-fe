import axios from "axios";

const apiUrl = "http://localhost:3000/";

export default axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
