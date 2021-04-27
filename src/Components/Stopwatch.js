import React, { useState, useCallback, useEffect } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [previousTime, setPreviousTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const handleStopwatch = useCallback(() => {
    setIsRunning(!isRunning);

    if(!isRunning) {
      setPreviousTime(Date.now());
    }
  }, [isRunning, setPreviousTime]);

  const tick = useCallback(
    () => {
      if (isRunning) {
        const now = Date.now();
        setPreviousTime(now);
        setElapsedTime(elapsedTime + (now - previousTime))
      }
    }, [elapsedTime, previousTime, isRunning]
  );

  const handleReset = () => {
    setElapsedTime(0);
  };

  useEffect(() => {
    // componentDidMount
    const interval = setInterval(() => {
      tick();
    }, 1000);

    //componentDidUnmount
    return () => {
      clearInterval(interval);
    };
  }, [tick]);

    const seconds = Math.floor(elapsedTime / 1000);

    return (
      <div className="stopwatch">
        <h2>stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={handleStopwatch}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
}

export default Stopwatch;