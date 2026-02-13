import axios from "axios";

const axiosPublic = axios.create({
  // baseURL:"http://localhost:5000/",
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic; 
