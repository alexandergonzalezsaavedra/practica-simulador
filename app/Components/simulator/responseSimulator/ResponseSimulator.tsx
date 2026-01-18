'use client';

import { IconCashBanknotePlus, IconTrendingUp } from '@tabler/icons-react';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ResponseSimulatorProps {
  aporteInicialValue: number;
  aporteMensualValue: number;
  plazo: number;
  resultado: number;
}

const ResponseSimulator = ({
  aporteInicialValue,
  aporteMensualValue,
  plazo,
  resultado,
}: ResponseSimulatorProps) => {
  const tasaAnual = 0.12;
  const tasaMensual = tasaAnual / 12;

  const ganancia = (() => {
    let total = aporteInicialValue;
    for (let i = 0; i < plazo; i++) {
      total = total * (1 + tasaMensual) + aporteMensualValue;
    }
    return total - (aporteInicialValue + aporteMensualValue * plazo);
  })();

  const totalConInteres =
    aporteInicialValue + aporteMensualValue * plazo + ganancia;
  const totalAportado = aporteInicialValue + aporteMensualValue * plazo;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(value);
  };

  useEffect(() => {
    const colors = ['#0ea5e9', '#10b981', '#8b5cf6'];
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });
  }, []);

  return (
    <div className='mt-8 space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='flex items-center gap-4 bg-white rounded-xl p-5 shadow-md border border-gray-100'>
          <div className='flex items-start justify-between'>
            <div className='bg-gray-100 rounded-full p-4'>
              <IconCashBanknotePlus size={26} />
            </div>
          </div>
          <div>
            <p className='text-sm text-gray-600 mb-1'>Total aportado</p>
            <p className='text-2xl font-bold text-gray-900'>
              {formatCurrency(totalAportado)}
            </p>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-white rounded-xl p-5 shadow-md border border-green-100'>
          <div className='flex items-start justify-between'>
            <div className='bg-green-100 text-green-500 rounded-full p-4'>
              <IconTrendingUp size={24} />
            </div>
          </div>
          <div>
            <p className='text-sm text-gray-600 mb-1'>Ganancia estimada</p>
            <p className='text-2xl font-bold text-green-600'>
              {formatCurrency(ganancia)}
            </p>
            <p className='text-xs text-gray-500 mt-1'>
              {((ganancia / totalAportado) * 100).toFixed(1)}% de rendimiento
            </p>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-white rounded-xl p-5 shadow-md border border-purple-100'>
          <div className='flex items-start justify-between'>
            <div className='bg-purple-100 rounded-full p-4'>
              <svg
                className='w-6 h-6 text-purple-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
            </div>
          </div>
          <div>
            <p className='text-sm text-gray-600 mb-1'>Plazo de ahorro</p>
            <p className='text-2xl font-bold text-gray-900'>{plazo} meses</p>
            <p className='text-xs text-gray-500 mt-1'>
              Tasa: {(tasaAnual * 100).toFixed(0)}% E.A.
            </p>
          </div>
        </div>
      </div>

      <div className='bg-white rounded-xl p-6 shadow-md border border-gray-100'>
        <h3 className='text-lg font-semibold text-gray-900 mb-4'>
          Datos de tu ahorro
        </h3>
        <div className='space-y-3'>
          <div className='flex justify-between items-center pb-3 border-b border-gray-100'>
            <span className='text-gray-600'>Aporte inicial</span>
            <span className='font-semibold text-gray-900'>
              {formatCurrency(aporteInicialValue)}
            </span>
          </div>
          <div className='flex justify-between items-center pb-3 border-b border-gray-100'>
            <span className='text-gray-600'>
              Aportes mensuales ({plazo} × {formatCurrency(aporteMensualValue)})
            </span>
            <span className='font-semibold text-gray-900'>
              {formatCurrency(aporteMensualValue * plazo)}
            </span>
          </div>
          <div className='flex justify-between items-center pb-3 border-b border-gray-100'>
            <span className='text-gray-600'>Intereses generados</span>
            <span className='font-semibold text-green-600'>
              {formatCurrency(ganancia)}
            </span>
          </div>
          <div className='flex justify-between items-center pt-2'>
            <span className='text-lg font-semibold text-gray-900'>
              Total final
            </span>
            <span className='text-xl font-bold text-blue-600'>
              {formatCurrency(totalConInteres)}
            </span>
          </div>
        </div>
      </div>

      <div className='bg-blue-800 rounded-2xl p-6 text-white shadow-xl'>
        <div className='text-center'>
          <p className='text-sm font-medium opacity-90 mb-2'>
            Total estimado en {plazo} meses
          </p>
          <p className='text-4xl md:text-5xl font-bold mb-4'>
            {formatCurrency(totalConInteres)}
          </p>
          <div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2'>
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z'
                clipRule='evenodd'
              />
            </svg>
            <span className='text-sm font-semibold'>
              +{formatCurrency(ganancia)} en ganancias
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseSimulator;
