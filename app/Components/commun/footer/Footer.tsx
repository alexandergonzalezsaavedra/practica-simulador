'use client';

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
  IconPhoneDone,
  IconPigMoney,
  IconTrendingUp,
} from '@tabler/icons-react';
import { div } from 'framer-motion/client';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className='py-12 bg-gray-900'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-3 items-center'>
            <div></div>
            <div>
              <div className='flex-col justify-center sm:justify-start items-end space-y-0 text-4xl'>
                <div className='flex justify-center sm:justify-start items-end'>
                  <span className='font-bold text-slate-800'>ALX</span>
                  <small className='text-slate-800'>BANK</small>
                </div>
                <div className='flex justify-center sm:justify-start text-sm -mt-2 text-slate-800'>
                  <em>
                    <b>38 años</b> <span>de confianza</span>
                  </em>
                </div>
              </div>
              <div className='flex justify-center sm:justify-start items-center gap-4 mt-6'>
                <Link
                  href='https://github.com/alexandergonzalezsaavedra'
                  target='_blank'
                >
                  <div className='flex justify-center items-center bg-slate-600/10 hover:bg-slate-600/50 text-slate-600 rounded-full w-[42] h-[42]'>
                    <IconBrandGithub size={24} />
                  </div>
                </Link>
                <Link
                  href='https://www.linkedin.com/in/alexander-gonzalez-saavedra/'
                  target='_blank'
                >
                  <div className='flex justify-center items-center bg-slate-600/10 hover:bg-slate-600/50 text-slate-600 rounded-full w-[42] h-[42]'>
                    <IconBrandLinkedin size={24} />
                  </div>
                </Link>
              </div>
            </div>
            <div className='flex-col space-y-4 text-sm mt-8 sm:mt-0'>
              <Link
                className='flex justify-center sm:justify-start items-center gap-2 text-slate-600 hover:text-slate-400 transition-all text-center'
                href='/products'
              >
                <IconPigMoney size={16} />
                Productos
              </Link>
              <Link
                className='flex justify-center sm:justify-start items-center gap-2 text-slate-600 hover:text-slate-400 transition-all text-center'
                href='/simulator'
              >
                <IconTrendingUp size={16} />
                Simulador
              </Link>
              <Link
                className='flex justify-center sm:justify-start items-center gap-2 text-slate-600 hover:text-slate-400 transition-all text-center'
                href='/contact'
              >
                <IconPhoneDone size={16} />
                Contactame
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className='bg-white dark:bg-gray-950 text-slate-500 py-4'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col sm:flex-row justify-center gap-1 items-center text-xs text-center'>
            <span>Todos los derechos reservados © 2026 - Hecho con</span>
            <IconHeart
              size={18}
              className='text-blue-500 animate-pulse'
            />
            <em>
              <span>por </span>
              <Link
                href='https://www.linkedin.com/in/alexander-gonzalez-saavedra/'
                target='_blank'
                className='text-blue-500 hover:text-blue-200 transition-all'
              >
                Alexander González
              </Link>
            </em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
