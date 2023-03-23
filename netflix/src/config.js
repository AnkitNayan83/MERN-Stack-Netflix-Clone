import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://videoappbyankit.vercel.app/api/",
});
