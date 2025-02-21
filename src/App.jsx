// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => setData(response.data))
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => setData(response.data))
//       .catch((error) => console.log(error, "Error"));
//   }, []);
//   return (
//     <div>
//       <h1>POST</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    axios;
    const inversal = setInterval(() => {
      setDate(new Date());
    });
    return () => clearInterval(inversal);
  });
  return (
    <div>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;
