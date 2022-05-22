import {useState, useEffect} from 'react'
import "./Banner.css"
import {getRemainingTimeUntilMsTimestamp} from "../CountdownTimer"

const Banner = ({ countdownTimestampMs }) => {
  const defaultRemainingTime = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
  };

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }
  return (
    <>
      <div className="banner container">
        <div className="banner__left-design"></div>
        <div className="banner__content">
          <h1>Something awesome is coming soon</h1>
          <p>
            Your all-in-one affiliate marketing tracking software
            <strong> track, automate </strong>
            and <strong> optimize </strong> your campaigns.
          </p>
          <div className="countdown-timer">
            <div className="banner__countdown-wrapper">
              <div>{remainingTime.days}</div>
              <h6>days</h6>
            </div>
            <div className="banner__countdown-wrapper">
              <div className="two-numbers">{remainingTime.hours}</div>
              <h6>hours</h6>
            </div>
            <div className="banner__countdown-wrapper">
              <div className="two-numbers">{remainingTime.minutes}</div>
              <h6>minutes</h6>
            </div>
            <div className="banner__countdown-wrapper">
              <div className="two-numbers">{remainingTime.seconds}</div>
              <h6>seconds</h6>
            </div>
          </div>
          <div className="banner__input-container">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="banner__address">
            <input type="text" placeholder="Enter your email address" />
            <button>JOIN OUR WAITING LIST</button>
          </div>
        </div>
        <div className="banner__right-design"></div>
      </div>
      <div className="banner__design-buttom container"></div>
    </>
  );
};

export default Banner