import axios from "axios";

export const TaskApi = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 8000,
});
