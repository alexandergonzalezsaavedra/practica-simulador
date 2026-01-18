'use client';

import { Button, Form, Input } from '@heroui/react';
import { IconSearch, IconX } from '@tabler/icons-react';
import { useState } from 'react';

interface PropsFormProducts {
  buscar: (value: string) => void;
}

const FormProducts = ({ buscar }: PropsFormProducts) => {
  const [buscarNombre, setBuscarNombre] = useState('');

  const handleBuscar = (value: string) => {
    setBuscarNombre(value);
    buscar(value);
  };

  const limpiarCampo = () => {
    setBuscarNombre('');
    buscar('');
  };
  return (
    <>
      <div className='container mx-auto mt-12'>
        <div className='p-4 bg-white dark:bg-black shadow-md rounded-xl'>
          <Form
            className='w-full grid grid-cols-1 md:grid-cols-12 gap-4 items-end justify-end'
            validationBehavior='aria'
          >
            <div className='col-span-12 md:col-span-4'>
              <Input
                isRequired
                name='buscarNombre'
                label='Buscar por nombre'
                labelPlacement='outside'
                placeholder='Ingresa el nombre del usuario'
                value={buscarNombre}
                onValueChange={handleBuscar}
                radius='full'
                startContent={
                  <IconSearch
                    size={20}
                    className='text-gray-400 dark:text-gray-500'
                  />
                }
                endContent={
                  buscarNombre && (
                    <button
                      type='button'
                      onClick={limpiarCampo}
                      className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors'
                    >
                      <IconX size={18} />
                    </button>
                  )
                }
              />
            </div>
            <div className='col-span-12 md:col-span-4'>
              <Button
                onPress={limpiarCampo}
                radius='full'
                variant='flat'
                color='primary'
              >
                Limpiar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FormProducts;
