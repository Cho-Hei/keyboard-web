"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@/components/AppContext";
import { useContext, useState } from "react";
import { CartContextType } from "@/types/index";
import MobileMenu from "./MobileMenu";
import { XMarkIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const { cartProducts } = useContext(CartContext) as CartContextType;
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='bg-stone-900'>
      <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href='/'>
          <Image
            src='/logo-no-background.svg'
            alt='logo'
            width={150}
            height={100}
          />
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className='regular-16 text-gray-10 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
              {link.label}
            </Link>
          ))}
        </ul>

        <Link
          className='lg:flexCenter cursor-pointer hover:font-bold'
          href={"/cart"}>
          <div className='flex items-center'>
            <div>
              <Image
                src='/shopping-cart-1.svg'
                alt='cart'
                width={38}
                height={38}
              />
            </div>
            <div>
              {cartProducts?.length > 0 && (
                <span className=' bg-primary text-white text-lg py-1 px-1 rounded-full leading-3'>
                  {cartProducts.reduce((acc, curr) => acc + curr.quantity, 0)}
                </span>
              )}
            </div>
          </div>
        </Link>
        {/* <Image
          src='menu.svg'
          alt='menu'
          width={32}
          height={32}
          className='inline-block cursor-pointer lg:hidden'
        /> */}
        {!navbarOpen ? (
          <button
            onClick={() => setNavbarOpen(true)}
            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white lg:hidden'>
            <Image
              src='menu.svg'
              alt='menu'
              width={32}
              height={32}
              className='inline-block cursor-pointer '
            />
          </button>
        ) : (
          <button
            onClick={() => setNavbarOpen(false)}
            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white lg:hidden'>
            <XMarkIcon className='h-5 w-5 inline-block cursor-pointer lg:hidden' />
          </button>
        )}
      </nav>
      {navbarOpen && <MobileMenu links={NAV_LINKS} />}
    </nav>
  );
};

export default Navbar;
