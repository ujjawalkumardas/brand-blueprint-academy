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

  return (
    <div className="w-full bg-gradient-to-r from-[hsl(10,85%,58%)] via-[hsl(25,90%,60%)] to-[hsl(35,90%,62%)] py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-white">
          <div className="flex items-center gap-2 font-bold text-sm md:text-base">
            <span>⚠️</span>
            <span>ONLY 50 SEATS LEFT!</span>
          </div>
          
          <span className="hidden md:inline text-white/60">•</span>
          
          <div className="flex items-center gap-2 font-bold text-sm md:text-base">
            <span>💸</span>
            <span>Early Pricing — Price increases once the offer ends!</span>
          </div>
          
          <span className="hidden md:inline text-white/60">•</span>
          
          <div className="flex items-center gap-2 font-bold text-sm md:text-base">
            <span>⏳</span>
            <span>Offer ends in:</span>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg animate-pulse">
              <span className="font-mono font-bold">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
