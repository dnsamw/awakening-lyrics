import { useEffect, useState } from "react";

function ConcertCountdown() {
  const concertDay1 = new Date("2025-11-29T19:00:00"); // 7 PM on 29th
  const concertDay2 = new Date("2025-11-30T19:00:00"); // 7 PM on 30th
  const concertEnd = new Date("2025-11-30T23:59:59"); // End of second day

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    eventDay: 1,
    isEventOver: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      let targetDate: Date;
      let eventDay = 1;

      // Determine which date to count down to
      if (now < concertDay1) {
        targetDate = concertDay1;
        eventDay = 1;
      } else if (now < concertDay2) {
        targetDate = concertDay2;
        eventDay = 2;
      } else if (now < concertEnd) {
        // Event is happening right now (second day)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
          eventDay: 2,
          isEventOver: false,
        });
        return;
      } else {
        // Event is over
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
          eventDay: 2,
          isEventOver: true,
        });
        return;
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        const milliseconds = Math.floor((difference % 1000) / 10);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          milliseconds,
          eventDay,
          isEventOver: false,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 10);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number, digits: number = 2): string => {
    return num.toString().padStart(digits, "0");
  };

  if (timeLeft.isEventOver) {
    return (<div className="text-lime-400 flex justify-center gap-4">
        <div className="bg-lime-400/30 px-2 border">29 ✓</div>
        <div className="bg-lime-400/30 px-2 border">30 ✓</div>
    </div>);
  }

  return (
    <div className="text-lime-400 font-rubik-80s flex justify-center md:text-2xl">
      <div>{formatNumber(timeLeft.days)}D</div>
      :<div>{formatNumber(timeLeft.hours)}H</div>
      :<div>{formatNumber(timeLeft.minutes)}M</div>
      :<div>
        {formatNumber(timeLeft.seconds)}.{formatNumber(timeLeft.milliseconds)}S
      </div>
    </div>
  );
}

export default ConcertCountdown;
