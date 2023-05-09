import { Container } from "@mui/system";
import React, { useState } from "react";
import "./App.css"; // css의 적용 (외부 파일 불러오기)
import style from "./App.module.css";

type CounterProps = {
  title: string;
  initValue?: number;
};

function Counter({ title, initValue = 0 }: CounterProps) {
  const [count, setCount] = useState<number>(initValue);

  function up() {
    setCount(count + 1);
  }

  // css의 적용 (인라인 방식)
  const h1Style = {
    fontSize: "3rem",
    color: "red",
    fontFamily: "궁서체",
  };

  return (
    // class를 지정해서 css 적용하기, 일반 css와는 달리 className으로 지정해야한다.
    <div className="outline">
      <h1 style={h1Style}>{title}</h1>
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
    <div className={style.layout}>
      <h1>Counter2</h1>
      <button onClick={up}>+</button>
      <ol>
        {times.map((value, index, array) => {
          return <li key={index}>{value}</li>;
        })}
      </ol>
    </div>
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

function Counter4() {
  type countType = {
    time: string;
    step: number;
  };

  const [count, setCount] = useState<countType[]>([]);
  const [step, setStep] = useState<number>(1);

  // for문을 돌려보자
  let total = 0;
  for (let i = 0; i < count.length; i++) {
    total += count[i].step;
  }

  return (
    <>
      <h1>Counter4</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => {
          console.log(e.target.value);
          setStep(+e.target.value);
        }}
        style={{ marginBottom: "20px" }}
      />
      <button
        onClick={() => {
          const newCount = [...count];
          newCount.push({ time: getCurrentTime(), step: step });
          setCount(newCount);
        }}
      >
        +
      </button>

      {/* 테이블을 사용해보자 */}
      <table
        style={{
          border: "1px solid black",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "5px" }}>Total</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>
              {/* reduce를 써보자 */}
              {count.reduce((acc, cur) => {
                return acc + cur.step;
              }, 0)}
            </th>
          </tr>
          <tr>
            <th style={{ border: "1px solid black", padding: "5px" }}>Time</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Step</th>
          </tr>
        </thead>
        <tbody>
          {count.map((value, index) => {
            return (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {value.time}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {value.step}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function App() {
  return (
    <Container>
      <div>
        <Counter title="불면증 카운터" initValue={10}></Counter>
        <Counter2 />
        <Counter3 />
        <Counter4 />
      </div>
    </Container>
  );
}

export default App;
