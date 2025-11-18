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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) return null;

  const units = [
    { key: 'jours', label: 'Jours', color: '#a8c5d8' },
    { key: 'heures', label: 'Heures', color: '#c9a961' },
    { key: 'minutes', label: 'Minutes', color: '#a8c5d8' },
    { key: 'secondes', label: 'Secondes', color: '#c9a961' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {units.map(({ key, label, color }, index) => (
        <div
          key={key}
          className="gold-frame p-4 text-center animate-fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative">
            <div className="text-3xl md:text-4xl font-bold font-['var(--font-playfair)'] mb-2" style={{ color }}>
              {timeLeft[key as keyof typeof timeLeft].toString().padStart(2, '0')}
            </div>
            <div className="text-xs font-['var(--font-montserrat)'] uppercase tracking-wider" style={{ color: '#999' }}>
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
