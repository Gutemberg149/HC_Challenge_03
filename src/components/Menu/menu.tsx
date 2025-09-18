import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png"
export default function Menu() {
  return (
    <nav className="bg-blue-100 text-blue-950 h-auto md:h-[10vh] flex items-center justify-center rounded-b-xl w-[100vw] md:w-[80vw] font-bold ">
      <ul className="flex h-[100%] w-[100%] items-center justify-around space-x-2 lg:space-x-6 sm:space-x-0 ">
        <img src={logo} alt="logo do hospital"  className="w-[50px] md:w-[80px] lg:w-[100]"/>

        <Link to="/" className="text-[10px] md:text-[17px] px-1 py-2 lg:px-4 lg:py-2 hover:bg-white rounded-lg transition-colors duration-200 " >
          Home
        </Link>
        <Link to="/pacientes" className="text-[10px] md:text-[17px]  px-1 py-2 lg:px-4 lg:py-2 hover:bg-white rounded-lg transition-colors duration-200" >
          Pacientes
        </Link>
        <Link
          to="/faq"className="text-[10px] md:text-[17px]  px-1 py-2 lg:px-4 lg:py-2 hover:bg-white rounded-lg transition-colors duration-200" >
          FAQ
        </Link>
        <Link
          to="/Integrante"
          className="text-[10px] md:text-[17px]  px-1 py-2 lg:px-4 lg:py-2 hover:bg-white rounded-lg transition-colors duration-200" >
          Integrantes
        </Link>
        <Link to="/card/produtos"className="text-[10px] md:text-[17px]  px-1 py-2 lg:px-4 lg:py-2 hover:bg-white rounded-lg transition-colors duration-200" >
          Contato
        </Link>
      </ul>
    </nav>
  );
}
