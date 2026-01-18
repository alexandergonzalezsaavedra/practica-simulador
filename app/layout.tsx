import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { ProvidersUI } from './HeroProvider';
import { Footer, Menu } from './Components';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alexander González',
  description: 'Prueba de desarrollo - Simulador de ahorro digital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='es'
      suppressHydrationWarning
    >
      <body className={manrope.className}>
        <ProvidersUI>
          <div className='relative'>
            <Menu />
            <main className='bg-default-100'>{children}</main>
          </div>
          <Footer />
        </ProvidersUI>
      </body>
    </html>
  );
}
