'use client';

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from '../../Buttons/ThemeToggle';
import { usePathname } from 'next/navigation';
import {
  IconTrendingUp,
  IconHomeDollar,
  IconPasswordUser,
  IconPhoneDone,
  IconPigMoney,
  IconPaywall,
} from '@tabler/icons-react';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className='sticky top-0 z-50'
    >
      <NavbarContent justify='start'>
        <NavbarBrand>
          <Link
            href='/'
            onClick={closeMenu}
          >
            <div className='flex-col space-y-0'>
              <div className='flex items-end gap-1'>
                <span className='font-bold text-primary dark:text-blue-300'>
                  ALX
                </span>
                <small>BANK</small>
              </div>
              <div className='text-[10px] -mt-2'>
                <em>
                  <b>38 años</b> <span>de confianza</span>
                </em>
              </div>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        justify='center'
        className='flex lg:hidden absolute left-1/2 transform -translate-x-1/2'
      >
        <div className='flex items-center justify-end gap-2 -me-12'>
          <Button
            color='default'
            variant='flat'
            size='md'
            radius='full'
            className='min-w-20'
            as={Link}
            href='onboarding'
          >
            <IconPaywall size={16} />
            Registrate
          </Button>
          <ThemeToggle />
        </div>
      </NavbarContent>

      {/* Contenido derecho: Toggle del menú */}
      <NavbarContent justify='end'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='lg:hidden'
        />
      </NavbarContent>

      {/* Contenido para desktop: Navegación */}
      <NavbarContent
        className='hidden lg:flex gap-4'
        justify='center'
      >
        <NavbarItem isActive={pathname === '/'}>
          <Button
            as={Link}
            color={pathname === '/' ? 'primary' : 'default'}
            variant={pathname === '/' ? 'flat' : 'light'}
            href='/'
            radius='full'
          >
            <IconHomeDollar
              size={20}
              className='text-primary-500'
            />
            Inicio
          </Button>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/products'}>
          <Button
            as={Link}
            color={pathname === '/products' ? 'primary' : 'default'}
            variant={pathname === '/products' ? 'flat' : 'light'}
            href='/products'
            radius='full'
          >
            <IconPigMoney
              size={20}
              className='text-primary-500'
            />
            Productos
          </Button>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/simulator'}>
          <Button
            as={Link}
            color={pathname === '/simulator' ? 'primary' : 'default'}
            variant={pathname === '/simulator' ? 'flat' : 'light'}
            href='/simulator'
            radius='full'
          >
            <IconTrendingUp
              size={20}
              className='text-primary-500'
            />
            Simulador
          </Button>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/simulator'}>
          <Button
            as={Link}
            color={pathname === '/contact' ? 'primary' : 'default'}
            variant={pathname === '/contact' ? 'flat' : 'light'}
            href='/contact'
            radius='full'
          >
            <IconPhoneDone
              size={20}
              className='text-primary-500'
            />
            Contáctame
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Botones para desktop */}
      <NavbarContent
        justify='end'
        className='hidden lg:flex items-center gap-2'
      >
        <Button
          as={Link}
          href='onboarding'
          color='primary'
          variant='faded'
          size='md'
          radius='full'
        >
          <IconPaywall size={16} />
          Registrate
        </Button>
        <ThemeToggle />
      </NavbarContent>

      {/* Menú móvil */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            className={`flex items-center gap-2 w-full ${pathname === '/' ? 'text-primary font-semibold' : ''}`}
            href='/'
            onClick={closeMenu}
          >
            <IconHomeDollar
              size={20}
              className='text-primary-500'
            />
            Inicio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className={`flex items-center gap-2 w-full ${pathname === '/products' ? 'text-primary font-semibold' : ''}`}
            href='/products'
            onClick={closeMenu}
          >
            <IconPigMoney
              size={20}
              className='text-primary-500'
            />
            Productos
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className={`flex items-center gap-2 w-full ${pathname === '/simulator' ? 'text-primary font-semibold' : ''}`}
            href='/simulator'
            onClick={closeMenu}
          >
            <IconTrendingUp
              size={20}
              className='text-primary-500'
            />
            Simulador
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className={`flex items-center gap-2 w-full ${pathname === '/contact' ? 'text-primary font-semibold' : ''}`}
            href='/contact'
            onClick={closeMenu}
          >
            <IconPhoneDone
              size={20}
              className='text-primary-500'
            />
            Contáctame
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Menu;
