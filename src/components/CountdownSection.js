import { useEffect, useState } from "react";

function CountdownSection({ startDate }) {
  const [timeData, setTimeData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = now - startDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeData({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <section className="countdown-compact">
      <div className="container">
        <div className="countdown-compact-content">
          <div className="countdown-text">
            <h3>Chúng mình đã yêu nhau được</h3>
            <p>Mỗi ngày trôi qua là thêm một lý do để yêu thương</p>
          </div>
          <div className="countdown-numbers">
            <div className="countdown-box">
              <span className="number">{timeData.days}</span>
              <span className="label">Ngày</span>
            </div>
            <div className="countdown-box">
              <span className="number">{timeData.hours}</span>
              <span className="label">Giờ</span>
            </div>
            <div className="countdown-box">
              <span className="number">{timeData.minutes}</span>
              <span className="label">Phút</span>
            </div>
            <div className="countdown-box">
              <span className="number">{timeData.seconds}</span>
              <span className="label">Giây</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountdownSection;
