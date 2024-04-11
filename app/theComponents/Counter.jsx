"use client"
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 9 ? prevCount + 1 : prevCount));
    }, 500); 

    return () => clearInterval(interval); // This is to clear the interval when the component unmounts
  }, []);

  return <div>{count}</div>;
}

export default Counter;