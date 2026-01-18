'use client';

interface PropsIntroVideo {
  tituloVideo: string;
  urlVideo: string;
}

import { useEffect, useRef, useState } from 'react';

const IntroVideo = ({ urlVideo, tituloVideo }: PropsIntroVideo) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' },
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.error('Error al reproducir el video:', error);
      });
    }
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      disableRemotePlayback
      className='w-full aspect-video rounded-lg shadow-xl'
      onContextMenu={(e) => e.preventDefault()}
      onPause={(e) => e.currentTarget.play()}
      aria-label={tituloVideo}
    >
      {shouldLoad && (
        <source
          src={urlVideo}
          type='video/mp4'
        />
      )}
      Tu navegador no soporta el elemento de video.
    </video>
  );
};

export default IntroVideo;
