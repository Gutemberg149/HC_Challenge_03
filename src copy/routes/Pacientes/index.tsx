import { useEffect, useState } from "react"
import type { TipoPaciente } from "../../types/tipoInfo"
import { PacientesData } from "../../Data/listaInfo"
import { Link } from "react-router-dom";
export default  function Pacientes () {
    const[dados,setDados]=useState<TipoPaciente[]>()

    document.title = "Pacientes";
    useEffect(()=>{
        setDados(PacientesData)
        
    },[])
    return(
        <section className="w-full bg-blue-50 flex flex-col justify-start items-center mt-7 h-auto pb-6">
            <h1 className="font-bold text-[15px] md:text-2xl lg:text-3xl mb-3 mt-3 text-blue-950 py-2 text-center">Pacientes</h1>
            <div className="w-[80%] bg-white flex flex-row flex-wrap justify-center items-center p-5 h-auto">
             {dados?.map(dado=>(
                <div key={dado.id} className="hover:bg-[#f1f3f4]">
                    <Link to={`/pacienteinfo/${dado.id}`}>
                    <div className="flex justify-around w-[280px] shadow-2xl p-2 h-[200px] m-2 ">
                        <div className="w-[50%] overflow-hidden">
                         <img src={dado.img} alt={"foto do paciente:"+ dado.nome} className="w-[100px]"/>
                        </div>
                         <div className="flex flex-col items-start w-[150px]">
                           <p className="text-sm mt-3"><span className="font-bold text-[16px]">Nome:</span> {dado.nome}</p>
                           <p className="text-sm"><span className="font-bold text-[16px]">Idade:</span> {dado.idade}</p>
                         </div>
                    </div>
                    </Link>
                </div>
              ))}
            </div>
        </section>
    )
}