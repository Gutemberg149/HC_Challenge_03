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
        <div>
            <h1>Pacientes</h1>
            {dados?.map(dado=>(
                <div key={dado.id}>
                    <Link to={`/pacienteinfo/${dado.id}`}>
                    <img src={dado.img} alt="" className="w-[120px] "/>
                    <div className="flex flex-col items-start w-[200px]">
                     <p className="text-sm mt-3"><span className="font-bold text-[16px]">Nome:</span> {dado.nome}</p>
                     <p className="text-sm"><span className="font-bold text-[16px]">Idade:</span> {dado.idade}</p>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}