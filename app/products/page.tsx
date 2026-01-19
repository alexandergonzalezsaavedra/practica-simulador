import { IconPigMoney } from '@tabler/icons-react';
import { Metadata } from 'next';
import { ContenedorClientes, IntroVideo } from '../Components';

export const metadata: Metadata = {
  title: 'Productos',
  description:
    'Nuestro simulador calculará una rentabilidad estimada para ayudarte a tomar mejores decisiones financieras.',
};

export default async function ProductsPage() {
  console.log(process.env.NEXT_PUBLIC_APP_URL);
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  let clientes = [];
  try {
    const response = await fetch(`${baseUrl}/api/products`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error('Error al obtener los clientes');
    }
    const data = await response.json();
    clientes = data.cuentasAhorro;
  } catch (error) {
    console.error(error);
  }

  return (
    <div className='px-4 sm:px-0 py-4 sm:py-12'>
      <div className='container mx-auto'>
        <div className='text-center mb-4'>
          <IconPigMoney
            size={40}
            className='text-primary mx-auto'
          />
        </div>
        <h1 className=' text-center gap-4 mb-12'>
          <span className='text-2xl sm:text-4xl'>Productos</span>
          <br />
          <span className='text-2xl sm:text-4xl font-bold'>
            GESTIÓN DE CLIENTES
          </span>
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-4 items-center'>
          <div>
            <IntroVideo
              urlVideo={'/source/video/cuentas-de-ahorro.mp4'}
              tituloVideo={'simulador ahorro digital'}
            />
          </div>
          <div className='px-0 sm:px-6'>
            <p className='text-lg sm:text-3xl mb-6 font-semibold'>
              <span>
                Panel de Validación de Usuarios
                <br />
                Consulta y Verifica
              </span>
            </p>
            <p>
              Explora la base de datos de nuestra comunidad de ahorradores.
              <br />
              <br />
              Utiliza esta herramienta para validar la información de las
              cuentas activas y garantizar la integridad de cada proceso
              administrativo.
            </p>
          </div>
        </div>

        <ContenedorClientes clientes={clientes} />
      </div>
    </div>
  );
}
