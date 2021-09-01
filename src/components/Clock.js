import React, { Fragment } from 'react';

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  let dayWord = "DAYS";
  if (timerDays === "01") {
    dayWord = "DAY";
  }

  return <Fragment>
    <section className="timer-container">
      <section className="timer">
        <div className="clock">
          <section className={`days ${timerDays === '00' ? 'hidden' : ''}`}>
            <p>{timerDays}</p>
            <small>{dayWord}</small>
          </section>
          <span className={`${timerDays === '00' ? 'hidden' : ''}`}>:</span>
          <section className="hours">
            <p>{timerHours}</p>
            <small>HR</small>
          </section>{" "}
          <span>:</span>
          <section className="minutes">
            <p>{timerMinutes}</p>
            <small>MIN</small>
          </section>{" "}
          <span>:</span>
          <section className="seconds">
            <p>{timerSeconds}</p>
            <small>SEC</small>
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
  timerSeconds: 0
};

export default Clock;