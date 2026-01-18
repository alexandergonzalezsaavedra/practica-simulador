'use client';

import { Button } from '@heroui/react';
import { useTheme } from 'next-themes';
import { IconMoon, IconSun } from '@tabler/icons-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Button
        color='default'
        size='md'
        variant='light'
        radius='full'
        isIconOnly
        onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
      </Button>
    </>
  );
};

export default ThemeToggle;
