'use client';
import {
  IconUser,
  IconCalendar,
  IconCreditCard,
  IconCircleCheck,
  IconCircleX,
  IconLock,
  IconAlertCircle,
} from '@tabler/icons-react';

interface Cliente {
  id: number;
  numeroCuenta: string;
  titular: string;
  documento: string;
  saldo: number;
  moneda: string;
  estado: string;
  fechaApertura: string;
}

interface DataProductsProps {
  clientesFiltrados: Cliente[];
}

const DataProducts = ({ clientesFiltrados }: DataProductsProps) => {
  const formatearMoneda = (valor: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(valor);
  };

  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const obtenerEstiloEstado = (estado: string) => {
    switch (estado) {
      case 'ACTIVA':
        return {
          bg: 'bg-emerald-50',
          text: 'text-emerald-700',
          border: 'border-emerald-200',
          icon: <IconCircleCheck size={18} />,
        };
      case 'BLOQUEADA':
        return {
          bg: 'bg-red-50',
          text: 'text-red-700',
          border: 'border-red-200',
          icon: <IconLock size={18} />,
        };
      case 'INACTIVA':
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-700',
          border: 'border-gray-200',
          icon: <IconCircleX size={18} />,
        };
      default:
        return {
          bg: 'bg-blue-50',
          text: 'text-blue-700',
          border: 'border-blue-200',
          icon: <IconAlertCircle size={18} />,
        };
    }
  };

  return (
    <div className='w-full mx-auto p-6'>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold text-gray-800 mb-2'>
          Cuentas de Ahorro
        </h2>
        <p className='text-gray-600'>
          {clientesFiltrados.length}{' '}
          {clientesFiltrados.length === 1
            ? 'cuenta encontrada'
            : 'cuentas encontradas'}
        </p>
      </div>

      {clientesFiltrados.length === 0 ? (
        <div className='bg-red-50 border border-red-200 rounded-lg p-8 text-center'>
          <IconAlertCircle
            size={48}
            className='mx-auto text-red-500 mb-4'
          />
          <h3 className='text-lg font-semibold text-gray-800 mb-2'>
            No se encontraron resultados
          </h3>
          <p className='text-gray-600'>
            Lo sentimos, no encontramos clientes con ese criterio de búsqueda.
          </p>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
          {clientesFiltrados.map((cliente) => {
            const estiloEstado = obtenerEstiloEstado(cliente.estado);

            return (
              <div
                key={cliente.id}
                className='bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 overflow-hidden'
              >
                <div className='bg-blue-600 p-4 text-white'>
                  <div className='flex items-center justify-between mb-2'>
                    <div className='flex items-center gap-2'>
                      <IconUser size={20} />
                      <h3 className='font-semibold text-lg'>
                        {cliente.titular}
                      </h3>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${estiloEstado.bg} ${estiloEstado.text} border ${estiloEstado.border}`}
                    >
                      {estiloEstado.icon}
                      {cliente.estado}
                    </div>
                  </div>
                  <div className='flex items-center gap-2 text-blue-100 text-sm'>
                    <IconCreditCard size={16} />
                    <span className='font-mono'>{cliente.numeroCuenta}</span>
                  </div>
                </div>

                {/* Contenido de la tarjeta */}
                <div className='p-5'>
                  {/* Saldo */}
                  <div className='mb-4'>
                    <p className='text-sm text-gray-500 mb-1'>
                      Saldo disponible
                    </p>
                    <p className='text-3xl font-bold text-gray-900'>
                      {formatearMoneda(cliente.saldo)}
                    </p>
                  </div>

                  {/* Detalles */}
                  <div className='space-y-3 pt-4 border-t border-gray-100'>
                    <div className='flex items-center justify-between text-sm'>
                      <span className='text-gray-500 flex items-center gap-2'>
                        <IconUser
                          size={16}
                          className='text-gray-400'
                        />
                        Documento
                      </span>
                      <span className='font-medium text-gray-900 font-mono'>
                        {cliente.documento}
                      </span>
                    </div>

                    <div className='flex items-center justify-between text-sm'>
                      <span className='text-gray-500 flex items-center gap-2'>
                        <IconCalendar
                          size={16}
                          className='text-gray-400'
                        />
                        Fecha de apertura
                      </span>
                      <span className='font-medium text-gray-900'>
                        {formatearFecha(cliente.fechaApertura)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DataProducts;
