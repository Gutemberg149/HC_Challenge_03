import { Link } from "react-router-dom";

export default function Menu(){

    return(
        <nav  className="bg-blue-600 text-white w-[100vw] h-[20vh]">
            <Link to="/" className="mx-auto block w-20 hover:bg-amber-200 text-center" >Home</Link>
            <Link to="/produtos" className="mx-auto block w-20 hover:bg-amber-200 text-center">FAQ</Link>
            <Link to="/card/produtos" className="mx-auto block w-20 hover:bg-amber-200 text-center">Integrantes</Link>
            <Link to="/card/produtos" className="mx-auto block w-20 hover:bg-amber-200 text-center">Contato</Link>
        </nav>
    );
}