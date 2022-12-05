import  axios  from "axios";

export const makeRequest = axios.create({
  baseURL: "https://everyone-social.herokuapp.com/api/",
  withCredentials: true,
});