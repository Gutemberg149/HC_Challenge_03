import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="bg-blue-100 text-blue-950 h-auto md:h-[10vh] flex items-center justify-center rounded-b-xl w-full md:w-[80vw] font-bold">
      <ul className="block md:flex h-[100%] w-[100%] items-center justify-center space-x-2 lg:space-x-6">
        <Link to="/" className="px-3 py-2 lg:px-4 lg:py-2 hover:bg-amber-50 rounded-lg transition-colors duration-200" >
          Home
        </Link>
        <Link
          to="/produtos"className="px-3 py-2 lg:px-4 lg:py-2 hover:bg-amber-50 rounded-lg transition-colors duration-200" >
          FAQ
        </Link>
        <Link
          to="/card/produtos"
          className="px-3 py-2 lg:px-4 lg:py-2 hover:bg-amber-50 rounded-lg transition-colors duration-200" >
          Integrantes
        </Link>
        <Link to="/card/produtos"className="px-3 py-2 lg:px-4 lg:py-2 hover:bg-amber-50 rounded-lg transition-colors duration-200" >
          Contato
        </Link>
      </ul>
    </nav>
  );
}
