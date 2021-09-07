import React, { Fragment } from 'react';

const Clock = ({ 
      timerDays, 
      timerHours, 
      timerMinutes, 
      timerSeconds, 
      isCountdownComplete 
    }) => {
  let dayWord = "DAYS";
  if (timerDays === "01") {
    dayWord = "DAY";
  }

  return <Fragment>
    <section className={
      `timer-container ${isCountdownComplete ? 'hidden' : ''}`
    }>
      <section className="timer">
        <div className="clock">
          <section className={`days ${timerDays === '00' ? 'hidden' : ''}`}>
            <p>{timerDays}</p>
            <small>{dayWord}</small>
          </section>
          <span className={`${timerDays === '00' ? 'hidden' : ''}`}>:</span>
          <section className="hours">
            <p>{timerHours}</p>
            <small>HRS</small>
          </section>{" "}
          <span>:</span>
          <section className="minutes">
            <p>{timerMinutes}</p>
            <small>MINS</small>
          </section>{" "}
          <span>:</span>
          <section className="seconds">
            <p>{timerSeconds}</p>
            <small>SECS</small>
          </section>
        </div>
      </section>
    </section>
  </Fragment>;
};

Clock.defaultProps = {
  timerDays: 0,
  timerHours: 0,
  timerMinutes: 0,
  timerSeconds: 0,
  isCountdownComplete: true
};

export default Clock;