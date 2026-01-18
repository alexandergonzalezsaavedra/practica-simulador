import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({
    cuentasAhorro: [
      {
        id: 1,
        numeroCuenta: '4578123690',
        titular: 'Alexander Gonzalez',
        documento: '1032399835',
        saldo: 3500000,
        moneda: 'COP',
        estado: 'ACTIVA',
        fechaApertura: '2021-06-15',
      },
      {
        id: 2,
        numeroCuenta: '7845129630',
        titular: 'Diana Benitez',
        documento: '1034567890',
        saldo: 1250000,
        moneda: 'COP',
        estado: 'ACTIVA',
        fechaApertura: '2022-03-10',
      },
      {
        id: 3,
        numeroCuenta: '9632145780',
        titular: 'Hanna Saavedra',
        documento: '1045678901',
        saldo: 890000,
        moneda: 'COP',
        estado: 'INACTIVA',
        fechaApertura: '2020-11-25',
      },
      {
        id: 4,
        numeroCuenta: '8521479630',
        titular: 'Chelsea Benitez',
        documento: '1056789012',
        saldo: 0,
        moneda: 'COP',
        estado: 'BLOQUEADA',
        fechaApertura: '2023-01-05',
      },
      {
        id: 5,
        numeroCuenta: '8521479630',
        titular: 'Martha Saavedra',
        documento: '1056789012',
        saldo: 180000000,
        moneda: 'COP',
        estado: 'ACTIVA',
        fechaApertura: '2020-01-05',
      },
    ],
  });
}
