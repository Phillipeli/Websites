import React, { useState, useEffect } from 'react';

interface DynamicCounterProps {
  targetValue: number;
  label: string;
  duration?: number;
  className?: string;
}

const DynamicCounter: React.FC<DynamicCounterProps> = ({ 
  targetValue, 
  label, 
  duration = 2000,
  className = ""
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start animation after a short delay
    const startDelay = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const newValue = Math.floor(easeOutQuart * targetValue);
      
      setCurrentValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCurrentValue(targetValue);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isVisible, targetValue, duration]);

  return (
    <div className={`text-center ${className}`}>
      <div className="text-2xl font-bold text-emerald-500 transition-all duration-300">
        +{currentValue}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export default DynamicCounter;