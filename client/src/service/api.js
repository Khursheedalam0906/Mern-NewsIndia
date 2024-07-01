import axios from "axios";

export const getNews = async () => {
  const URL = "newsindia-api.vercel.app";
  try {
    return await axios.get(`${URL}/news`);
  } catch (error) {
    console.log(error);
  }
};
