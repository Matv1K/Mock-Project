import axios from "axios";

const baseURL = "http://localhost:3333";

const getAxiosInstance = () => {
  const instance = axios.create({
    baseURL,
  });

  return instance;
};

export default getAxiosInstance;
