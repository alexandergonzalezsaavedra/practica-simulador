import {
  IconBrandWhatsapp,
  IconHomeHand,
  IconPasswordUser,
  IconPhoneDone,
} from '@tabler/icons-react';
import IntroImage from '../Components/introImagen/IntroImagen';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className='px-4 sm:px-0 py-4 sm:py-12'>
      <div className='container mx-auto'>
        <div className='text-center mb-4'>
          <IconPhoneDone
            size={20}
            className='text-primary mx-auto'
          />
        </div>
        <h1 className=' text-center gap-4 mb-12'>
          <span className='text-2xl sm:text-4xl'>Contáctame</span>
          <br />
          <span className='text-2xl sm:text-4xl font-bold'>
            CONOCE INFORMACIÓN
          </span>
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-4 items-center'>
          <div>
            <IntroImage
              urlImagen={'/source/imagenes/hanna-trabajando.png'}
              tituloImagen={'Alexander González - Hanna'}
              opacidadFiltro={30}
            />
          </div>
          <div className='px-0 sm:px-6'>
            <p className='text-lg sm:text-3xl mb-6 font-semibold'>
              <span>
                ¡Hola! Soy Alexander González Saavedra
                <br />
                <small className='text-slate-500'>
                  Desarrollador Frontend Senior | UI & UX
                </small>
              </span>
            </p>
            <div className='flex gap-3 items-center mt-3'>
              <div className='flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11'>
                <IconHomeHand size={20} />
              </div>
              <div className='flex flex-col gap-0.5'>
                <Link
                  target='_blank'
                  className='group gap-x-0.5 text-medium text-foreground font-medium'
                  href='https://maps.app.goo.gl/uHU1oZvWheyUYcuj9'
                  rel='noreferrer noopener'
                >
                  <div className='flex'>
                    Transversal 65 # 59 - 21 - Barrio Madelena
                    <svg
                      className='group-hover:text-inherit text-default-400 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                      fill='none'
                      height='16'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      width='16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M7 17 17 7M7 7h10v10' />
                    </svg>
                  </div>
                </Link>
                <p className='text-small text-default-500'>
                  Bogotá, D.C., Colombia
                </p>
              </div>
            </div>
            <div className='flex gap-3 items-center mt-3'>
              <div className='flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11'>
                <IconBrandWhatsapp size={20} />
              </div>
              <div className='flex flex-col gap-0.5'>
                <Link
                  target='_blank'
                  className='group gap-x-0.5 text-medium text-foreground font-medium'
                  href='https://api.whatsapp.com/send?phone=573156201269&text=Hola%20Alexander'
                  rel='noreferrer noopener'
                >
                  <div className='flex'>
                    (+57) 315 620 1269
                    <svg
                      className='group-hover:text-inherit text-default-400 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                      fill='none'
                      height='16'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      width='16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M7 17 17 7M7 7h10v10' />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className='flex gap-3 items-center mt-3'>
              <div className='flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11'>
                <IconPasswordUser size={20} />
              </div>
              <div className='flex flex-col gap-0.5'>
                <Link
                  target='_blank'
                  className='group gap-x-0.5 text-medium text-foreground font-medium'
                  href='/source/documentos/alexander-gonzalez-saavedra-2025-2.pdf'
                  rel='noreferrer noopener'
                >
                  <div className='flex'>
                    Conoce más
                    <svg
                      className='group-hover:text-inherit text-default-400 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                      fill='none'
                      height='16'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      width='16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M7 17 17 7M7 7h10v10' />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
