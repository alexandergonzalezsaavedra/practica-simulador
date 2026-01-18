'use client';

import {
  addToast,
  Button,
  Form,
  Input,
  Select,
  SelectItem,
} from '@heroui/react';
import { useState } from 'react';
import { useCurrencyInput } from '../../../hook/currency';
import { IconCoins } from '@tabler/icons-react';
import ResponseSimulator from '../responseSimulator/ResponseSimulator';

const FormSimulator = () => {
  const [resultado, setResultado] = useState<number | null>(null);
  const [plazo, setPlazo] = useState<number>(0);
  const [plazoSelected, setPlazoSelected] = useState<string>('');
  const [aporteInicialValue, setAporteInicialValue] = useState<number>(0);
  const [aporteMensualValue, setAporteMensualValue] = useState<number>(0);

  const aporteInicial = useCurrencyInput(0);
  const aporteMensual = useCurrencyInput(0);

  const meses = [
    { key: '6', label: '6 meses', value: 6 },
    { key: '12', label: '12 meses', value: 12 },
    { key: '18', label: '18 meses', value: 18 },
    { key: '24', label: '24 meses', value: 24 },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const plazoValue = formData.get('plazo') as string;
    const aporteInicialVal = aporteInicial.value;
    const aporteMensualVal = aporteMensual.value;

    if (!aporteInicialVal || !aporteMensualVal || !plazoValue) {
      addToast({
        title: '😰 Debes llenar todos los campos',
        description:
          'Para realizar la simulación es necesario que llenes todos los campos',
        color: 'danger',
      });
      return;
    }

    if (aporteInicialVal <= 0 || aporteMensualVal <= 0) {
      addToast({
        title: 'Valores inválidos',
        description: 'Los montos deben ser mayores a cero',
        color: 'warning',
      });
      return;
    }

    const plazoNum = parseInt(plazoValue);
    const total = aporteInicialVal + aporteMensualVal * plazoNum;

    addToast({
      title: 'Simulación calculada',
      description: 'Tu simulación de ahorro ha sido calculada exitosamente',
      color: 'success',
    });

    setAporteInicialValue(aporteInicialVal);
    setAporteMensualValue(aporteMensualVal);
    setPlazo(plazoNum);
    setResultado(total);
  };

  const isFormValid =
    aporteInicial.value > 0 && aporteMensual.value > 0 && plazoSelected !== '';

  return (
    <>
      <div className='container mx-auto mt-12'>
        <div className='p-4 bg-white shadow-md rounded-xl'>
          <Form
            className='w-full grid grid-cols-1 md:grid-cols-7 gap-4 items-end'
            validationBehavior='aria'
            onSubmit={handleSubmit}
          >
            <div className='md:col-span-2'>
              <Input
                isRequired
                name='aporteInicial'
                label='Monto inicial del ahorro'
                labelPlacement='outside'
                placeholder='$0'
                value={aporteInicial.displayValue}
                onValueChange={aporteInicial.handleChange}
                radius='full'
              />
            </div>

            <div className='md:col-span-2'>
              <Input
                isRequired
                name='aporteMensual'
                label='Aporte mensual'
                placeholder='$0'
                labelPlacement='outside'
                value={aporteMensual.displayValue}
                onValueChange={aporteMensual.handleChange}
                radius='full'
              />
            </div>

            <div className='md:col-span-2'>
              <Select
                isRequired
                name='plazo'
                label='Selecciona el plazo'
                labelPlacement='outside'
                radius='full'
                onSelectionChange={(keys) => {
                  const selected = Array.from(keys)[0] as string;
                  setPlazoSelected(selected);
                }}
              >
                {meses.map((mes) => (
                  <SelectItem key={mes.key}>{mes.label}</SelectItem>
                ))}
              </Select>
            </div>

            <div className='md:col-span-1 flex items-end'>
              <Button
                color={!isFormValid ? 'default' : 'primary'}
                radius='full'
                type='submit'
                className='w-full'
                disabled={!isFormValid}
              >
                <IconCoins size={16} />
                Calcular ganancias
              </Button>
            </div>
          </Form>
        </div>

        {resultado !== null && (
          <ResponseSimulator
            aporteInicialValue={aporteInicialValue}
            aporteMensualValue={aporteMensualValue}
            plazo={plazo}
            resultado={resultado}
          />
        )}
      </div>
    </>
  );
};

export default FormSimulator;
