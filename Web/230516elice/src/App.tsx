import React, { useState, useEffect } from "react";

// 복습
function Counter1() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter - State, form</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(+e.target.value)}
      />
      <button onClick={() => setCount(count + step)}>+</button> {count}
    </div>
  );
}

// useEffect와 setInterval 사용하기
function Counter2() {
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

function App() {
  return (
    <div className="App">
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;
