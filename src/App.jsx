import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [Running, setRunning] = useState(false);

  useEffect(() => {
    let timerInterval;

    if (Running) {
      timerInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 300);
    }

    return () => clearInterval(timerInterval);
  }, [Running]);

  const formatTime = (time) => {
    return time < 10 ? '0' + time : time;
  };

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const pauseTimer = () => {
    setRunning((prevState) => !prevState);
  };
  // return(
  //   <div>
  // {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}<br></br>

  //   </div>
  // )

  return (
    <div>
      <h1>Stopwatch</h1>
      {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}<br></br><hr></hr>

      <button onClick={startTimer} disabled={Running}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={pauseTimer}>{Running ? 'Pause' : 'Continue'}</button>
    </div>
  );
}

export default Stopwatch;
