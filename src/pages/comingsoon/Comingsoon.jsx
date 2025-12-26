import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/16.png';
import './Comingsoon.css';

const Comingsoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Fixed: Use valid date (February only has 28/29 days)
  const targetDate = new Date('2026-02-28T23:59:59').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // Fixed: Handle when countdown reaches zero
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
      <Header title="Coming Soon" image={HeaderImage}>
        {/* Optional: Add header content here if needed */}
      </Header>
      
      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <div className="animated-title">
            <h1 className="title-text">Something Amazing Is Coming</h1>
            <div className="title-underline"></div>
          </div>
          
          <p className="coming-soon-description">
            We're working hard to bring you something incredible. Stay tuned for our launch!
          </p>

          <div className="countdown-timer">
            <div className="timer-item">
              <div className="timer-number pulse-animation">{timeLeft.days.toString().padStart(2, '0')}</div>
              <div className="timer-label">Days</div>
            </div>
            <div className="timer-item">
              <div className="timer-number pulse-animation">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="timer-label">Hours</div>
            </div>
            <div className="timer-item">
              <div className="timer-number pulse-animation">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="timer-label">Minutes</div>
            </div>
            <div className="timer-item">
              <div className="timer-number pulse-animation">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="timer-label">Seconds</div>
            </div>
          </div>

          {/* Fixed: Proper closing of div elements */}
          <div className="floating-elements">
            <div className="floating-circle circle-1"></div>
            <div className="floating-circle circle-2"></div>
            <div className="floating-circle circle-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comingsoon;