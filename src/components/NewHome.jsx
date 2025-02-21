import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function NewHome() {
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

export default NewHome;
