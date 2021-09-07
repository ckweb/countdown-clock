import './App.scss';
import React, { useState, useEffect } from "react";
import Clock from './components/Clock';

let distance;

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [isCountdownComplete, setIsCountdownComplete] = useState();

  let interval;

  const startTimer = () => {
    // The clock reads settings in from window scope.
    const countdownDate = window.countdownDate || new Date("September 5, 2021").getTime();
    const showDaysInHours = window.showDaysInHours || false;

    interval = setInterval(() => {
      const now = new Date().getTime();
      distance = countdownDate - now;

      if (distance <= 0) {
        setIsCountdownComplete(true);
      } else {
        setIsCountdownComplete(false);
      }

      const days = Math.floor(distance / (24 * 60 * 60 * 1000)).toString().padStart(2, "0");
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)).toString().padStart(2, "0");
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60)).toString().padStart(2, "0");
      const seconds = Math.floor((distance % (60 * 1000)) / (1000)).toString().padStart(2, "0");

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        if (showDaysInHours) {
          setTimerDays("00"); 
          setTimerHours((getDaysInHours() + parseInt(hours)).toString().padStart(2, "0"));
        } else {
          setTimerDays(days); 
          setTimerHours(hours);
        }
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    });
  }

  useEffect( () => {
    startTimer();
  });

  return ( 
    <div className="countdown-clock-app">
      <Clock 
        timerDays={timerDays} 
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
        isCountdownComplete={isCountdownComplete}
      /> 
    </div>
  );
}

// Returns the day portion in hours. This is not the total amount of hours left.
// It's just the day portion, but converted to hours.
function getDaysInHours() {
  if (!distance) return;
  const daysInHours = Math.floor(distance / (24 * 60 * 60 * 1000)) * 24;
  return daysInHours;
}

export default App;