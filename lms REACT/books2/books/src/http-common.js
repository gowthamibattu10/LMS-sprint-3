import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:2020/user",
  headers: {
    "Content-type": "application/json"
  }
});