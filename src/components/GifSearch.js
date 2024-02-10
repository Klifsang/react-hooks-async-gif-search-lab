// GifSearch.js
import React, { useState } from "react";

const GifSearch = ({ fetchGifs }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGifs(query);
    setQuery("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a search term..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default GifSearch;
