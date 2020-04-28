import axios from "axios";

const api = axios.create({
  baseURL: "https://vhr5480o69.execute-api.us-east-1.amazonaws.com/v1",
});

export default api;
