'use client';

import { useMemo, useState } from 'react';
import FormProducts from './FormProducts';
import DataProducts from './DataProducts';
import { useDebounce } from '../../hook/debounce';
interface Cliente {
  id: number;
  numeroCuenta: string;
  titular: string;
  documento: string;
  banco: string;
  saldo: number;
  moneda: string;
  estado: string;
  fechaApertura: string;
}
interface DataProductsProps {
  clientes: Cliente[];
}
const ContenedorClientes = ({ clientes }: DataProductsProps) => {
  const [buscarPorNombre, setBuscarPorNombre] = useState('');
  const debouncedSearch = useDebounce(buscarPorNombre, 300);
  const filtrarClientes = useMemo(() => {
    return clientes.filter((cliente) =>
      cliente.titular.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [debouncedSearch, clientes]);
  return (
    <div>
      <FormProducts buscar={setBuscarPorNombre} />
      <DataProducts clientesFiltrados={filtrarClientes} />
    </div>
  );
};

export default ContenedorClientes;
