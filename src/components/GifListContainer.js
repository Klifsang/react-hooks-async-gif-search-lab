// GifListContainer.js
import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const apiKey = "tUfner44ClKrHajcfv4OuZY9oj4tkGqj";
  const [gifs, setGifs] = useState([]);

  const fetchGifs = (query) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`
    )
      .then((res) => res.json())
      .then((data) => setGifs(data));
  };

  return (
    <div>
      <GifSearch fetchGifs={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;
