import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getNews } from "../service/api";
import Article from "./Article";

const Articles = () => {
  const [news, setNews] = useState([]);

  //
  useEffect(() => {
    dailynews();
  }, []);

  const dailynews = async () => {
    let response = await getNews();
    setNews(response.data);
  };

  return (
    <Box>
      {news.map((data) => {
        return <Article data={data} />;
      })}
    </Box>
  );
};

export default Articles;
