import Link from "next/link";

const Navbar:React.FC = () => {
  return (
    <div className="flex justify-between bg-white" style={{ padding: "3vh" }}>
      <div>icono</div>
      <div>
        <ul className="flex justify-center" style={{ gap: "8vh" }}>
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
      <div>
        <div className="flex" style={{}}>
          <div>
            <button className=""><Link href='/autenticacion/ingreso'>Ingresa</Link></button>
          </div>
          <div className="border rounded-md" style={{}}>
            <button ><Link href='/autenticacion/registro'>Registrate</Link></button>
          </div>
        </div>
      </div>
        <div>🌎</div>
    </div>
  );
};

export default Navbar;
