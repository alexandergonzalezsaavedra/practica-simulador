'use client';

import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ToastProvider } from '@heroui/toast';

export function ProvidersUI({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme='light'
    >
      <ToastProvider placement='bottom-center' />
      <HeroUIProvider>{children}</HeroUIProvider>
    </NextThemesProvider>
  );
}
