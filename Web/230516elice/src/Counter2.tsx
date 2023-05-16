import React, { useState, useEffect } from "react";

// useEffect와 setInterval 사용하기
export function Counter2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((cur) => cur + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Counter - useEffect, setInterval</h1>
      {count}
    </div>
  );
}
