import axios from "axios";
import { clsx } from "clsx";
import { getCookie } from "cookies-next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const baseUrl = "http://192.168.43.176:8001/api/";

const axiosInstance = axios.create();
const TOKEN_KEY = "token";

axiosInstance.interceptors.request.use((request) => {
  const token = getCookie(TOKEN_KEY);
  console.log(token);
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return request;
});
export default axiosInstance;
