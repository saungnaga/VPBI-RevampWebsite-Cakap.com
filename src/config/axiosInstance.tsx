import axios from "axios";

export const careerInstance = axios.create({
  baseURL: "https://career-staging.cakap.com/wp-json/custom/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiInstance = axios.create({
  baseURL: "https://api-staging.cakap.com/v3",
  headers: {
    "Content-Type": "application/json",
  },
});
