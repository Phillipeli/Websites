import React from 'react';

interface ImageSEOProps {
  images: Array<{
    url: string;
    alt: string;
    caption?: string;
    location: string;
  }>;
}

const ImageSEO: React.FC<ImageSEOProps> = ({ images }) => {
  // Generate structured data for all images
  const imageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": images.map((image, index) => ({
      "@type": "ImageObject",
      "position": index + 1,
      "url": image.url,
      "name": image.alt,
      "description": image.caption || image.alt,
      "contentUrl": image.url,
      "encodingFormat": "image/jpeg"
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(imageStructuredData, null, 2)
      }}
    />
  );
};

export default ImageSEO;