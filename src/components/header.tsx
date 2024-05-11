'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utilis';


const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b`,
        {
          'border-b border-white bg-white backdrop-blur-lg': scrolled,
          'border-b border-white bg-white': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4 bg-[url('/images.jpg')]">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <Image className='rounded-2xl' src="/logo.jpg" alt="Certificado" width={35} height={10} />
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="h-8 w-16 rounded-full bg-white flex items-center justify-center text-center">
            <span className="font-bold text-sm">infoblox</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;