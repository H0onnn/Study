import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";

function Counter3() {
  const [count, setCount] = useState(0);

  // useEffect, fetch를 사용한 서버와 통신
  useEffect(() => {
    fetch("http://localhost:9999/counter")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.value);
      });
  }, []);

  return (
    <div style={{ border: "10px solid" + getRandomColor(), padding: "20px" }}>
      <h1>Counter - Ajax & useEffect</h1>
      <button
        onClick={() => {
          fetch("http://localhost:9999/counter", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              value: count + 1,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              setCount(data.value);
            });
        }}
      >
        +
      </button>{" "}
      {count}
    </div>
  );
}

// 랜덤색 뽑아내는 함수
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState<countItemType[]>([]);

  // div박스 테두리에 적용할 style
  const styleObj = {
    border: "10px solid" + getRandomColor(),
    padding: "20px",
    backgroundColor: getRandomColor(),
    borderRadius: "10px",
    boxShadow: "0 0 5px #000",
  };

  type countItemType = {
    time: string;
    step: number;
  };

  return (
    // div에 style 적용해서 랜덤 테두리 만들기
    <div style={styleObj}>
      <h1>Counter</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(+e.target.value)}
      />
      {/* mui로 버튼 만들기 */}
      <Button variant="outlined">+</Button>
      <button
        onClick={() => {
          const newCountItem: countItemType = {
            time: new Date().toLocaleTimeString(),
            step,
          };
          setCount([...count, newCountItem]); // newCountItem을 push하는 것
        }}
      >
        +
      </button>
      👉 {count.reduce((acc, item) => acc + item.step, 0)}
      <table>
        <thead>
          <tr>
            <td>time</td>
            <td>step</td>
          </tr>
        </thead>
        <tbody>
          {count.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.step}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Counter2() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: "10px solid black",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h1>Counter - Dialog</h1>
      <Button variant="contained" onClick={() => setOpen(!open)}>
        Run
      </Button>
      {/* mui의 dialog를 이용한 스타일링 */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle style={{ backgroundColor: getRandomColor() }}>
          Dialog Counter
        </DialogTitle>
        <DialogContent>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            atque odio nostrum? Et aliquam perspiciatis tempora quibusdam sint
            cumque optio, magni impedit voluptate illo iusto nobis perferendis
            quia harum error.
          </p>
          <button>+</button> 👉 0
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function App() {
  return (
    <Container>
      {/* mui의 container와 grid를 이용한 컨테이너 나누기 */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Counter3 />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Counter2 />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Counter />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Counter />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Counter />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Counter />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Counter />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Counter />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
