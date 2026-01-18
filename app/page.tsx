import { IconHomeDollar } from '@tabler/icons-react';
import IntroImage from './Components/introImagen/IntroImagen';

export default function Home() {
  return (
    <div className='px-4 sm:px-0 py-4 sm:py-12'>
      <div className='container mx-auto'>
        <div className='text-center mb-4'>
          <IconHomeDollar
            size={20}
            className='text-primary mx-auto'
          />
        </div>
        <h1 className=' text-center gap-4 mb-12'>
          <span className='text-2xl sm:text-4xl'>Bienvenidos a mi</span>
          <br />
          <span className='text-2xl sm:text-4xl font-bold'>PRUEBA TECNICA</span>
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-4 items-center'>
          <div>
            <IntroImage
              urlImagen={'/source/imagenes/hanna-y-yo.jpg'}
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
            <p>
              Crecí profesionalmente entre el diseño gráfico y el código, lo que
              me permite entender no solo cómo se ve una interfaz, sino cómo
              debe funcionar para ser verdaderamente útil.
              <br />
              <br />
              Con más de 7 años de experiencia en entornos corporativos, me he
              especializado en transformar ideas complejas en soluciones
              digitales fluidas y seguras. Soy un apasionado de los detalles, la
              arquitectura limpia y, por supuesto, de la innovación que
              realmente ayuda a las personas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
