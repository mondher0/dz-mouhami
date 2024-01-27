import axios from "axios";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const baseUrl = "http://192.168.43.176:8000/api/";

export const getWilaya = async () => {
  try {
    const response = await axios.get(`${baseUrl}location/wilaya`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
