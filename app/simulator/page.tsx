import { IconTrendingUp } from '@tabler/icons-react';
import { FormSimulator, IntroVideo } from '../Components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simulador de ahorro digital',
  description:
    'Nuestro simulador calculará una rentabilidad estimada para ayudarte a tomar mejores decisiones financieras.',
};

export default function SimulatorPage() {
  return (
    <div className='px-4 sm:px-0 py-4 sm:py-12'>
      <div className='container mx-auto'>
        <div className='text-center mb-4'>
          <IconTrendingUp
            size={40}
            className='text-primary mx-auto'
          />
        </div>
        <h1 className=' text-center gap-4 mb-12'>
          <span className='text-2xl sm:text-4xl'>Simulador</span>
          <br />
          <span className='text-2xl sm:text-4xl font-bold'>AHORRO DIGITAL</span>
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-4 items-center'>
          <div>
            <IntroVideo
              urlVideo={'/source/video/ahorro-creciendo.mp4'}
              tituloVideo={'simulador ahorro digital'}
            />
          </div>
          <div className='px-0 sm:px-6'>
            <p className='text-lg sm:text-3xl mb-6 font-semibold'>
              <span>
                Planifica tu ahorro y visualiza
                <br />
                cuánto podrías ganar con el tiempo.
              </span>
            </p>
            <p>
              Ingresa un monto inicial, define cuánto ahorrarás cada mes y el
              plazo deseado.
              <br />
              Nuestro simulador calculará una rentabilidad estimada para
              ayudarte a tomar mejores decisiones financieras.
            </p>
          </div>
        </div>

        <FormSimulator />
      </div>
    </div>
  );
}
