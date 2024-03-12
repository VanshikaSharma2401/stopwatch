import React, { useEffect, useState } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setTime((time)=>time+1)
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [running]);

  const startStopwatch = () => {
    setRunning(true);
  };

  const stopStopwatch = () => {
    setRunning(false);
  };

  const resetStopwatch = () => {
    setRunning(false);
    setTime(0);
  };

  const formatTime=(time)=>{
    const minutes=Math.floor(time/60)
    const seconds =time%60
    return `${minutes}:${seconds<10?"0":""}${seconds}`
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        Time: {formatTime(time)}
      </div>
      {running ? (
        <button onClick={stopStopwatch}>Stop</button>
      ) : (
        <button onClick={startStopwatch}>Start</button>
      )}

      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default Stopwatch;
