// Image optimization utilities

export interface ImageConfig {
  quality: number;
  format: 'webp' | 'jpeg' | 'png' | 'avif';
  width?: number;
  height?: number;
}

// Generate SEO-friendly filename from alt text
export const generateSEOFilename = (altText: string, originalExtension: string): string => {
  return altText
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove multiple consecutive hyphens
    .trim()
    .substring(0, 50) // Limit length
    + '.' + originalExtension;
};

// Generate responsive image sizes
export const generateResponsiveSizes = (breakpoints: number[] = [320, 640, 768, 1024, 1280, 1920]) => {
  return breakpoints.map(width => ({
    width,
    media: `(max-width: ${width}px)`,
    size: `${width}px`
  }));
};

// Create blur placeholder data URL
export const createBlurDataURL = (width: number = 10, height: number = 10): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  
  // Create gradient blur effect
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f3f4f6');
  gradient.addColorStop(1, '#e5e7eb');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1);
};

// Image compression utility
export const compressImage = (file: File, quality: number = 0.8): Promise<Blob> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx?.drawImage(img, 0, 0);
      
      canvas.toBlob(
        (blob) => resolve(blob!),
        'image/jpeg',
        quality
      );
    };
    
    img.src = URL.createObjectURL(file);
  });
};

// Generate structured data for images
export const generateImageStructuredData = (
  imageUrl: string,
  alt: string,
  caption?: string,
  author?: string,
  datePublished?: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": imageUrl,
    "name": alt,
    "description": caption || alt,
    "author": author ? {
      "@type": "Person",
      "name": author
    } : undefined,
    "datePublished": datePublished,
    "encodingFormat": "image/jpeg",
    "contentUrl": imageUrl
  };
};

// Image sitemap generator
export const generateImageSitemap = (images: Array<{
  url: string;
  alt: string;
  caption?: string;
  location: string;
}>) => {
  const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  const sitemapFooter = `</urlset>`;

  const imageEntries = images.map(image => `
  <url>
    <loc>${image.location}</loc>
    <image:image>
      <image:loc>${image.url}</image:loc>
      <image:caption>${image.caption || image.alt}</image:caption>
      <image:title>${image.alt}</image:title>
    </image:image>
  </url>`).join('');

  return sitemapHeader + imageEntries + sitemapFooter;
};

// WebP support detection
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// AVIF support detection
export const supportsAVIF = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const avif = new Image();
    avif.onload = avif.onerror = () => {
      resolve(avif.height === 2);
    };
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });
};