import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const json = await response.json();
      setData(json.results);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
