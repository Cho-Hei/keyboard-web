import Link from "next/link";

type NavlinkProps = {
  href: string;
  key: string;
  label: string;
};

const MobileMenu = ({ links }: { links: NavlinkProps[] }) => {
  return (
    <ul className='flex flex-col py-4 items-center absolute z-30 w-full bg-stone-900'>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
