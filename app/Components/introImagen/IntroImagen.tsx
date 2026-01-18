'use client';

interface PropsIntroImage {
  tituloImagen: string;
  urlImagen: string;
  opacidadFiltro?: number;
}

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const IntroImage = ({
  urlImagen,
  tituloImagen,
  opacidadFiltro = 0,
}: PropsIntroImage) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imageRef}
      className='w-full aspect-video rounded-lg shadow-xl overflow-hidden bg-gray-100 relative'
    >
      {shouldLoad && (
        <>
          <Image
            src={urlImagen}
            alt={tituloImagen}
            fill
            className='object-cover'
            priority={false}
            quality={90}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
          />
          {/* Filtro oscuro superpuesto */}
          <div
            className='absolute inset-0 bg-black z-10'
            style={{ opacity: opacidadFiltro / 100 }}
          ></div>
        </>
      )}
    </div>
  );
};

export default IntroImage;
