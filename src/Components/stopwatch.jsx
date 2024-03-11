import React, { useEffect, useState } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState("0:00");
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        const [minutes, seconds] = time.split(':').map(parseFloat);
        let newSeconds = seconds + 1;
        let newMinutes = minutes;
        if (newSeconds === 60) {
          newMinutes += 1;
          newSeconds = 0;
        }
        setTime(`${newMinutes}:${newSeconds < 10 ? '0' + newSeconds : newSeconds}`);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [running, time]);

  const startStopwatch = () => {
    setRunning(true);
  };

  const stopStopwatch = () => {
    setRunning(false);
  };

  const resetStopwatch = () => {
    setTime("0:00");
    setRunning(false);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        Time: {time}
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
