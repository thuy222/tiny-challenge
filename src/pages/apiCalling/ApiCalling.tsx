import React, { useState } from "react";

const ApiCalling = () => {
  const [textSearch, setTextSearch] = useState<string>("");
  const [data, setData] = useState<Object[]>([]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`https://api.datamuse.com/words?rel_syn=fast`)
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  return (
    <div
      style={{ placeItems: "center", display: "flex", flexDirection: "column" }}
    >
      <h1>API Calling</h1>
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="search" style={{ margin: "2rem" }}>
          Search Here
        </label>
        <input
          type="text"
          id="search"
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApiCalling;
