import React from "react";

const Filter = ({ setSearchTitle, setSearchRating }) => {
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Search by rating..."
        onChange={(e) => setSearchRating(Number(e.target.value))}
        min="0"
        max="10"
      />
    </div>
  );
};

export default Filter;
