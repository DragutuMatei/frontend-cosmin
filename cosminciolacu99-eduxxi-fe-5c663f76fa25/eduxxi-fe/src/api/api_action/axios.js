import axios from "axios";

//TO DO - get full api link
const instance = axios.create({
    baseURL: "http://localhost:5000",
});
  
export default instance;