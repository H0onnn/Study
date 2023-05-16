import React, { useState } from "react";

// 복습
export function Counter1() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="layout">
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
