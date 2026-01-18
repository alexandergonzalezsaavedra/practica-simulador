import { Metadata } from 'next';
import { IntroVideo, OnboardingForm } from '../Components';
import { IconPaywall } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'Productos',
  description:
    'Nuestro simulador calculará una rentabilidad estimada para ayudarte a tomar mejores decisiones financieras.',
};
const page = () => {
  return (
    <div className='px-4 sm:px-0 py-4 sm:py-12'>
      <div className='container mx-auto'>
        <div className='text-center mb-4'>
          <IconPaywall
            size={40}
            className='text-primary mx-auto'
          />
        </div>
        <h1 className=' text-center gap-4 mb-12'>
          <span className='text-2xl sm:text-4xl'>Registrate</span>
          <br />
          <span className='text-2xl sm:text-4xl font-bold'>
            DESCUBRE LOS BENEFICIOS
          </span>
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-4 items-start relative'>
          <div className='sticky top-20'>
            <IntroVideo
              urlVideo={'/source/video/registrate.mp4'}
              tituloVideo={'simulador ahorro digital'}
            />
          </div>
          <div className='px-0 sm:px-6'>
            <div className='mb-12'>
              <OnboardingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
