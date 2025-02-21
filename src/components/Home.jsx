import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error, "Error"));
  }, []);
  return (
    <div>
      <h1>POST</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.address.city}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
