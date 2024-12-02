'use client';

import { useEffect, useState } from 'react';

interface FacebookPhoto {
  id: string;
  source: string;
  created_time: string;
  link: string;
}

export default function FacebookFeed() {
  const [photos, setPhotos] = useState<FacebookPhoto[]>([]);
  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN;
  const PAGE_ID = 'cupcakedreamllc';
  const ALBUM_ID = '131883220228712'; // Cupcakes album ID

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/api/facebookPhotos');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (!data || data.length === 0) {
          console.warn('No photos found');
          setPhotos([]);
          return;
        }

        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="facebook-album-container">
      <div className="photos-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <a 
              href={photo.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={photo.source} 
                alt="Facebook post" 
                className="facebook-photo"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
