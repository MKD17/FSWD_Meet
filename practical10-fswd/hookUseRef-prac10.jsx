import React, { useState, useRef } from 'react';
function Timer() {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);
  
    const startTimer = () => {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    };
  
    const stopTimer = () => {
      clearInterval(intervalRef.current);
    };
  
    const resetTimer = () => {
      clearInterval(intervalRef.current);
      setSeconds(0);
    };
  
    return (
      <div>
        <h2>Timer: {seconds} seconds</h2>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    );
  }

  export default Timer;