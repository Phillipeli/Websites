import { useState, useEffect } from 'react';
import { supportsWebP, supportsAVIF } from '../utils/imageOptimization';

interface ImageOptimizationHook {
  supportsWebP: boolean;
  supportsAVIF: boolean;
  isLoading: boolean;
  getOptimalFormat: (originalFormat: string) => string;
  generateOptimizedUrl: (src: string, width?: number, quality?: number) => string;
}

export const useImageOptimization = (): ImageOptimizationHook => {
  const [webPSupport, setWebPSupport] = useState(false);
  const [avifSupport, setAVIFSupport] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSupport = async () => {
      const [webp, avif] = await Promise.all([
        supportsWebP(),
        supportsAVIF()
      ]);
      
      setWebPSupport(webp);
      setAVIFSupport(avif);
      setIsLoading(false);
    };

    checkSupport();
  }, []);

  const getOptimalFormat = (originalFormat: string): string => {
    if (avifSupport) return 'avif';
    if (webPSupport) return 'webp';
    return originalFormat;
  };

  const generateOptimizedUrl = (src: string, width?: number, quality: number = 85): string => {
    const format = getOptimalFormat('jpeg');
    const params = new URLSearchParams();
    
    if (width) params.append('w', width.toString());
    params.append('q', quality.toString());
    params.append('f', format);
    
    return `${src}?${params.toString()}`;
  };

  return {
    supportsWebP: webPSupport,
    supportsAVIF: avifSupport,
    isLoading,
    getOptimalFormat,
    generateOptimizedUrl
  };
};