import Image from "next/image";
import Logo from "../../public/assets/Logo-Nombre.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import Link from "next/link";

const navLinks = [
  { name: "Inicio" , href:'/'},
  { name: "Proyectos", href:'/proyectos' },
  { name: "Donaciones", href:'/donaciones' },
  { name: "Servicios", href:'/servicios' },
  { name: "Contacto", href:'contacto' },
];

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-15">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />

        <div className="hidden lg:flex pl-[74px] gap-x-[36px]">
          {navLinks.map((item, index) => (
            <Link href={item.href}><p className="text-[#36485C] font-medium" key={index}>
            {item.name}
          </p></Link> 
          ))}
        </div>
      </div>

      <div className="flex gap-x-5">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">
          <Link href='autenticacion/registro'>Ingreso</Link>
        </p>

        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-[#36485C] lg:block">
            <Link href='/autenticacion/ingreso' style={{backgroundColor: '#7286ff'}}>Registro</Link> 
          </span>
        </div>

        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
