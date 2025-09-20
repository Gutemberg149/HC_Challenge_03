import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Footer from "./components/Footer/Footer";

export default function App(){

  return(
    <>
      <Cabecalho/>
      <Outlet/>
      <Footer/>
    </>
  );
}