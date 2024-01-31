"use client";
import Image from "next/image";
import LogoLetras from "../../public/assets/LOGO - NORMAL.svg";
import Logo from "../../public/assets/Logo-Nombre.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import Link from "next/link";
import BlurArrow from "../../public/assets/blue-button.svg";
import { useState } from "react";
import { usePathname } from "next/navigation";
import style from './navbar.module.css'
import { logout } from "@/app/firebase/auth/signOut";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Donaciones", href: "/donaciones" },
  { name: "Servicios", href: "/servicios" },
  { name: "Contacto", href: "/contacto" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const path = usePathname()
  console.log(path);


  const handlerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (


    <nav className={path.includes('/pages/user') ? 'flex w-full bg-white items-center justify-between px-[20px] py-[16px]  lg:mx-auto lg:px-15 shadow-custom fixed z-[1000]' : "flex w-full bg-white items-center justify-between px-[20px] py-[16px] lg:mx-auto lg:px-15"} >
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />

        <div className="hidden lg:flex pl-[74px] gap-x-[36px]">
          {navLinks.map((item, index) => (
            <Link href={item.href}>
              <p className="text-[#36485C] font-medium" key={index}>
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>


      <div className="flex items-center gap-x-5">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[10px]">
          <Link href="/pages/signin">Ingreso</Link>
        </p>

        <div className="flex items-center gap-x-2">
          <span className="hidden font-medium text-[#fff] lg:block rounded-lg py-3 px-10 text-center" style={{ backgroundColor: "#7286ff" }} >
            <Link href='/pages/user'>
              Registro
            </Link>
          </span>
        </div>
            <div style={{cursor: 'pointer'}} onClick={async () => {
              await logout()
            }}>
              log out
            </div>
            
        <div className="lg:hidden cursor-pointer" onClick={handlerMenu}>
          <Image
            src={Menu}
            alt="Menu Button"
            className="lg:hidden cursor-pointer"
          />
        </div>
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50">
            <div className="flex flex-col items-center justify-center h-full">
              <div className=" pointer">
                <Link
                  href=""
                  onClick={handlerMenu}
                  className="absolute top-16 left-16 text-3xl  rounded-full  text-center"
                >
                  <Image src={Logo} alt="Logo" className="" />
                </Link>
              </div>

              <div className=" pointer">
                <Link
                  href=""
                  onClick={handlerMenu}
                  className="absolute top-16 right-16 text-3xl border rounded-full h-[40px] w-[40px] text-center"
                >
                  <Image src={BlurArrow} alt="Learn more" className="w-full" />
                </Link>
              </div>
              {navLinks.map((item, index) => (
                <Link href={item.href} key={index} onClick={handlerMenu}>
                  <p className="text-[#7286ff] font-medium py-8">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

