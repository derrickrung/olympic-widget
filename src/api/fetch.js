import axios from "axios";

// create configurable instance of fetch api
const instance = axios.create({
  headers: {
    Accept: "application/json"
  }
});

export default instance;
