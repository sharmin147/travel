import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/online_travel_agency/api",
  headers: {
    "Content-type": "application/json"
  }
});