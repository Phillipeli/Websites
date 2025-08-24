// Image performance optimization utilities

export interface PerformanceMetrics {
  loadTime: number;
  fileSize: number;
  format: string;
  dimensions: { width: number; height: number };
}

// Measure image load performance
export const measureImagePerformance = (src: string): Promise<PerformanceMetrics> => {
  return new Promise((resolve, reject) => {
    const startTime = performance.now();
    const img = new Image();
    
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      
      // Estimate file size (not 100% accurate but useful for monitoring)
      fetch(src, { method: 'HEAD' })
        .then(response => {
          const fileSize = parseInt(response.headers.get('content-length') || '0');
          const format = response.headers.get('content-type')?.split('/')[1] || 'unknown';
          
          resolve({
            loadTime,
            fileSize,
            format,
            dimensions: { width: img.naturalWidth, height: img.naturalHeight }
          });
        })
        .catch(() => {
          resolve({
            loadTime,
            fileSize: 0,
            format: 'unknown',
            dimensions: { width: img.naturalWidth, height: img.naturalHeight }
          });
        });
    };
    
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = src;
  });
};

// Calculate Largest Contentful Paint (LCP) impact
export const calculateLCPImpact = (imageElement: HTMLImageElement): boolean => {
  const rect = imageElement.getBoundingClientRect();
  const viewportArea = window.innerWidth * window.innerHeight;
  const imageArea = rect.width * rect.height;
  
  // Consider image as LCP candidate if it takes up more than 15% of viewport
  return (imageArea / viewportArea) > 0.15;
};

// Optimize image loading strategy
export const getLoadingStrategy = (
  imagePosition: 'above-fold' | 'below-fold',
  imageSize: 'small' | 'medium' | 'large',
  isLCPCandidate: boolean
): {
  loading: 'eager' | 'lazy';
  fetchPriority: 'high' | 'low' | 'auto';
  preload: boolean;
} => {
  if (imagePosition === 'above-fold' || isLCPCandidate) {
    return {
      loading: 'eager',
      fetchPriority: 'high',
      preload: true
    };
  }
  
  if (imageSize === 'large') {
    return {
      loading: 'lazy',
      fetchPriority: 'low',
      preload: false
    };
  }
  
  return {
    loading: 'lazy',
    fetchPriority: 'auto',
    preload: false
  };
};

// Image format recommendations based on content type
export const getOptimalFormat = (contentType: 'photo' | 'graphic' | 'icon' | 'logo'): string[] => {
  const formatMap = {
    photo: ['avif', 'webp', 'jpeg'],
    graphic: ['avif', 'webp', 'png'],
    icon: ['svg', 'webp', 'png'],
    logo: ['svg', 'webp', 'png']
  };
  
  return formatMap[contentType];
};

// Generate responsive breakpoints
export const generateBreakpoints = (
  maxWidth: number,
  aspectRatio: number = 16/9
): Array<{ width: number; height: number; media: string }> => {
  const breakpoints = [320, 640, 768, 1024, 1280, 1920];
  
  return breakpoints
    .filter(bp => bp <= maxWidth)
    .map(width => ({
      width,
      height: Math.round(width / aspectRatio),
      media: `(max-width: ${width}px)`
    }));
};

// Image optimization checklist
export const imageOptimizationChecklist = {
  naming: {
    seoFriendly: 'Use descriptive, keyword-rich filenames',
    hyphens: 'Separate words with hyphens, not underscores',
    lowercase: 'Use lowercase letters only',
    relevant: 'Include relevant keywords for the page/content'
  },
  
  compression: {
    jpeg: 'Use 80-85% quality for photos',
    png: 'Use for graphics with transparency',
    webp: 'Implement WebP with JPEG/PNG fallback',
    avif: 'Consider AVIF for even better compression'
  },
  
  responsive: {
    srcset: 'Provide multiple image sizes',
    sizes: 'Define appropriate sizes attribute',
    breakpoints: 'Use common device breakpoints',
    artDirection: 'Consider different crops for mobile'
  },
  
  loading: {
    lazy: 'Use lazy loading for below-fold images',
    eager: 'Use eager loading for above-fold images',
    preload: 'Preload critical images',
    fetchPriority: 'Set appropriate fetch priority'
  },
  
  seo: {
    altText: 'Write descriptive, keyword-rich alt text',
    title: 'Add title attribute for additional context',
    caption: 'Use captions for important images',
    structuredData: 'Implement ImageObject schema markup'
  },
  
  accessibility: {
    altText: 'Provide meaningful alt text',
    decorative: 'Use empty alt for decorative images',
    contrast: 'Ensure sufficient contrast for text overlays',
    focus: 'Make interactive images keyboard accessible'
  }
};