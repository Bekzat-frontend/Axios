import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Fetch() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setCount(json));
  }, []);
  return (
    <div>
      <h1>Fecht</h1>
      {count.map((items) => (
        <div key={items.id}>
          <p>{items.body}</p>
          <p>{items.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Fetch;
