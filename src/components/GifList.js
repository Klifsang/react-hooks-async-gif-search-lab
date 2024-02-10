// GifList.js
import React from "react";

const GifList = ({ gifs }) => {
    const allGifs = gifs.data||[]
    console.log(gifs.data)
  return (
    <div>
      <ul>
        {allGifs.map((gif) => (
          <li key={gif.id}>
            <img src={gif.images.original.url} alt={gif.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GifList;
