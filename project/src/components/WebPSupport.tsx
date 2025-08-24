import React, { useState, useEffect } from 'react';

interface WebPSupportProps {
  children: (supportsWebP: boolean) => React.ReactNode;
}

const WebPSupport: React.FC<WebPSupportProps> = ({ children }) => {
  const [supportsWebP, setSupportsWebP] = useState<boolean | null>(null);

  useEffect(() => {
    const checkWebPSupport = () => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        setSupportsWebP(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };

    checkWebPSupport();
  }, []);

  if (supportsWebP === null) {
    return <div>Loading...</div>;
  }

  return <>{children(supportsWebP)}</>;
};

export default WebPSupport;