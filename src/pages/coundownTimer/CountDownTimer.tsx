import { useEffect, useState } from "react";
import "../../App.css";

const CountDownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [count, setCount] = useState(false);

  function handleReset() {
    setTimeLeft({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  }
  function handleContinue() {
    if (timeLeft.seconds === 0 && timeLeft.minutes !== 0) {
      setTimeLeft({ ...timeLeft, seconds: 59 });
    } else if (timeLeft.minutes === 0) {
      setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
    }
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      handleContinue();
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft.hours, timeLeft.minutes, timeLeft.seconds]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="time">
          <label htmlFor="hours">Hours</label>
          <input
            type="number"
            value={timeLeft.hours}
            onChange={(e) =>
              setTimeLeft({ ...timeLeft, hours: +e.target.value })
            }
          />
        </div>
        <div className="time">
          <label htmlFor="minutes">Minutes</label>
          <input
            type="number"
            value={timeLeft.minutes}
            onChange={(e) =>
              setTimeLeft({ ...timeLeft, minutes: +e.target.value })
            }
          />
        </div>
        <div className="time">
          <label htmlFor="seconds">Seconds</label>
          <input
            type="number"
            value={timeLeft.seconds}
            onChange={(e) =>
              setTimeLeft({ ...timeLeft, seconds: +e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <button onClick={handleContinue}>{count ? "Pause" : "Continue"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CountDownTimer;

//hour > 0 && minutes > 0 => seconds 59 -> 0 -> 59
//minutes === 0 => seconds = 0
