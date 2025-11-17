'use client';

import { useState, useEffect } from 'react';

export default function Countdown() {
  const weddingDate = new Date('2026-06-20T14:00:00');
  const [timeLeft, setTimeLeft] = useState({
    jours: 0,
    heures: 0,
    minutes: 0,
    secondes: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
          heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          secondes: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg gold-frame">
          <div className="text-4xl font-bold text-gold font-['var(--font-playfair)']">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-foreground/70 font-['var(--font-montserrat)'] uppercase mt-2">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}
