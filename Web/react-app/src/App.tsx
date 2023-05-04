import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type CounterProps = {
  title: string;
  initValue?: number;
};

function Counter({ title, initValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initValue);
  function up() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={up}>+</button> {count}
    </div>
  );
}

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

// 1. state가 arr or obj일 경우 값을 변경할 때 복제본을 생성하여 변경
// 2. for나 map의 활용할 땐 key값을 제공
// 3. state가 배열일 때 값이 없다면 추론을 사용할 수 없기에 제네릭을 명시적으로 입력
function Counter2() {
  const [times, setTimes] = useState<string[]>([]);
  console.log("component - times", times);
  function up() {
    const newTimes = [...times];
    newTimes.push(getCurrentTime());
    setTimes(newTimes);
  }
  return (
    <>
      <h1>Counter2</h1>
      <button onClick={up}>+</button>
      <ol>
        {times.map((value, index, array) => {
          return <li key={index}>{value}</li>;
        })}
      </ol>
    </>
  );
}

// input과 같은 form 태그와 state를 연동해서 react에서 다루기
function Counter3() {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(10);
  return (
    <>
      <h1>Counter3</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => {
          console.log(e.target.value);
          setStep(+e.target.value);
        }}
      />
      <button onClick={() => setCount(count + step)}>+</button>
      {count}
    </>
  );
}

function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={10}></Counter>
      <Counter title="강아지 카운터"></Counter>
      <Counter title="고양이 카운터"></Counter>
      <Counter2 />
      <Counter3 />
    </div>
  );
}

export default App;
