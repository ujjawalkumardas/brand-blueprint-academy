import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Calculate target time (72 hours from now)
    const targetTime = new Date().getTime() + (72 * 60 * 60 * 1000);

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, '0');
  
  const totalHours = timeLeft.days * 24 + timeLeft.hours;

  return (
    <div className="w-full bg-gradient-to-r from-primary via-accent to-primary py-3 shadow-glow">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-primary-foreground">
          <div className="flex items-center gap-2 font-bold text-sm md:text-base">
            <span>🔥</span>
            <span>Limited to 50 Seats Only!</span>
          </div>
          
          <span className="hidden md:inline opacity-60">•</span>
          
          <div className="flex items-center gap-2 font-bold text-sm md:text-base">
            <span>💰</span>
            <span>Secure Your Early Access Now</span>
          </div>
          
          <span className="hidden md:inline opacity-60">•</span>
          
          <div className="flex items-center gap-2 font-bold text-sm md:text-base">
            <span>⏰</span>
            <span>Deal Expires In:</span>
            <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              <span className="font-mono font-bold tracking-wider">
                {formatTime(totalHours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
