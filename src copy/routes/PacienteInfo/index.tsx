import { useParams } from "react-router-dom"
import { PacientesData } from "../../Data/listaInfo";
import type { TipoPaciente } from "../../types/tipoInfo"
import { useEffect, useState } from "react";

export default function PacienteInfo() {
  const [dado, setDado] = useState<TipoPaciente | undefined>(undefined);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
     const paciente = PacientesData.find(p => p.id === Number(id));
    setDado(paciente);
  }, [id]);
 document.title = "Paciente Info";
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center mt-8 md:mt-4 lg:mt-4" > 
       <h1 className="sm:text-xl md:text-2xl gl:text-3xl font-bold text-foreground mb-2  text-blue-950 ">Info do Paciente {dado?.nome}</h1>
      {dado ? (
        <div className="w-[300px] md:w-[500px] h-[1000px] md:h-[750px] lg:h-[450px] flex flex-col md:flex-row justify-center items-center md:items-start shadow-2xl m-7 p-3 rounded-2xl"> 
                <div className="w-[200px] lg:w-[50%] overflow-hidden mr-5">
                     <img src={dado.img} alt={"foto do paciente:"+ dado.nome} className="w-[300px]"/>
                 </div>

                 <div className="flex flex-col items-start w-[150px]">
                           <p className="text-sm mt-3"><span className="font-bold text-[16px]">Nome:</span> {dado.nome}</p>
                           <p className="text-sm"><span className="font-bold text-[16px]">Idade:</span> {dado.idade}</p>
                         </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
