import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

// useEffect, setInterval, mui
export const Counter2: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  // isRunning : true
  useEffect(() => {
    let id: string | number | NodeJS.Timer | undefined;
    if (isRunning) {
      id = setInterval(() => {
        setCount((oldCount) => oldCount + 1);
      }, 1000);
    }
    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [isRunning]);

  const startCount = () => {
    setIsRunning(true);
  };

  const stopCount = () => {
    setIsRunning(false);
  };

  return (
    <div className="layout">
      <h1>useEffect, setInterval</h1>
      {count}
      <ButtonGroup style={{ marginLeft: 10 }}>
        <Button variant="contained" onClick={startCount}>
          Start
        </Button>
        <Button
          style={{ marginLeft: 10 }}
          variant="contained"
          onClick={stopCount}
        >
          Stop
        </Button>
      </ButtonGroup>
    </div>
  );
};
