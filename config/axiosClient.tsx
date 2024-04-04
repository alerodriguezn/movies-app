import axios from "axios";


//add your rapidapi key here .env API_KEY
const axiosClient = axios.create({
  baseURL: "https://moviesdatabase.p.rapidapi.com",

  headers: {
    "X-RapidAPI-Key": process.env.EXPO_PUBLIC_API_KEY,  
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  }
  
});


export default axiosClient;