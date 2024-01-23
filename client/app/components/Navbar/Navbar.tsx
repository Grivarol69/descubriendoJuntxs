import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-between">
        <li>
          <Link href={"/"}>Inicio</Link>
        </li>
        <li>
          <Link href={"/proyectos"}>Proyectos</Link>
        </li>
        <li>
          <Link href={"/donaciones"}>Donaciones</Link>
        </li>
        <li>
          <Link href={"/servicios"}>Servicios</Link>
        </li>
        <li>
          <Link href={"/contacto"}>Contacto</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
